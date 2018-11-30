// import boom from 'boom'
// import { ObjectID } from 'mongodb'
import { ERRORS } from '../../metrics/error'
import { Auth0Service } from '../../services'

class Controllers {
  static async get(req, res, next) {
    res.json({ a: 'home controller get' })
  }
  static async post(req, res, next) {
    res.json({ a: 'home controller post' })
  }
  static async put(req, res, next) {
    res.json({ a: 'home controller put' })
  }
}

export const HomeController = Controllers