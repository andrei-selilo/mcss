import request from 'superagent'
import boom from 'boom'

import { AUTH0 } from '../constants/auth0.constants'
import { Entropy } from 'entropy-string'

class Service {
  constructor() {
    this.domain = process.env.AUTH0_API_URL
    this.headers = { Authorization: `Bearer ${process.env.AUTH0_API_TOKEN}` }
  }

  url(requestUrl) {
    return `${this.domain}${requestUrl}`
  }

  async getUserByEmail(email) {
    try {
      const response = await request
        .get(this.url('users-by-email'))
        .query({ email })
        .set(this.headers)
      return response.body
    } catch (error) {
      throw boom.badRequest(error.message)
    }
  }

  /* @param user
   *  email: email,
      firstName: string
      lastName: string
      role: string
      password: string,  - not mandatory
      app_metadata: {},
   */
  async create(user) {
    try {
      const entropy = new Entropy({ total: 1e10, risk: 1e12 })
      const payload = {
        email: user.email,
        password: user.password || entropy.string(),
        name: `${user.firstName} ${user.lastName}`,
        verify_email: true,
        email_verified: false,
        connection: AUTH0.CONNECTION.UPA,
        user_metadata: {
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      }
      const response = await request
        .post(this.url('users'))
        .send(payload)
        .set(this.headers)
      return response.body
    } catch (error) {
      throw boom.badRequest(error.response.error.text)
    }
  }
}

export const Auth0Service = new Service()