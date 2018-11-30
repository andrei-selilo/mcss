// import boom from 'boom'
import { USER } from '../metrics/user'
import { ERRORS } from '../metrics/error'
import { UserModel } from '../models/user'

class Service {

  roles: any
  model: any

  constructor() {
    this.model = UserModel
    this.roles = USER.ROLES_ENUM
  }

  /**
   * Checks user before creation
   *
   * @params stubsObject stubs storage object
   * @params stubsKeys
   */
  async preventBadUserCreation(user) {
    if (!user.email) throw ERROR.EMAIL_REQUIRED
    const isInDb = await this.model.findOne({ email: user.email })
    if (isInDb !== null) throw ERROR.USER.EXISTS
    if (user.role && !this.roles.includes(user.role)) throw ERROR.UNSUPPORTED_PARAMS
  }

  createOne(payload) {
    const { role, companyId, ...user } = payload
    return this.model.create({
      ...user,
      roles: [role],
      accounts: companyId ? [companyId] : []
    })
  }
}

export const UsersService = new Service()