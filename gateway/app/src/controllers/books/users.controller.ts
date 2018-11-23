// import boom from 'boom'
import { ObjectID } from 'mongodb'
import { Auth0Service } from '../../services'
import { UserModel } from '../../models/user.model'
import { ERRORS } from '../../constants/error.constants'
import { UsersService } from '../../services'

class Controllers {
  static async create(req, res, next) {
    try {
      let authUser = {}
      const user = req.body
      await UsersService.preventBadUserCreation(user)
      const auth0UserGetResponse = await Auth0Service.getUserByEmail(user.email)
      if (auth0UserGetResponse.length === 0) {
        const createAuth0User = await Auth0Service.create({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        })
        if (!createAuth0User) throw 'auth'//boom.failedDependency(ERRORS.AUTH0.CREATE)
        authUser = createAuth0User
      } else {
        authUser = auth0UserGetResponse[0]
      }
      const result = await UsersService.createOne(user, authUser)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  static async get(req, res, next) {
    try {
      const users = await UserModel.find()
      return res.json(users)
    } catch (error) {
      next(error)
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params
      const user = await UserModel.findById(ObjectID(id))
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }

  static async getMe(req, res, next) {
    try {
      const { email } = req.user
      const user = await UserModel.findOne({ email })
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }

  static async updateById(req, res, next) {
    try {
      const { _id, ...update } = req.body
      const { id } = req.params
      await UserModel.updateOne({ _id: id }, { $set: update })
      const updatedUser = await UserModel.findById(id)
      return res.json(updatedUser)
    } catch (error) {
      next(error)
    }
  }
}

export const UsersController = Controllers