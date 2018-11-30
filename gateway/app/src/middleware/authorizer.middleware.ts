// import boom from 'boom';
import { ERRORS } from '../metrics/error'
import { USER } from '../metrics/user'
import { UserModel } from '../models/user'
import { SessionService } from '../services/session.service'

class MiddlewareService {

  generalAdmins: any
  userManagers: any

  constructor() {
    this.generalAdmins = [
      USER.ROLES.SUPER_ADMIN,
      USER.ROLES.ACCOUNT_ADMIN,
    ];
    this.userManagers = [
      USER.ROLES.SUPER_ADMIN,
      USER.ROLES.ACCOUNT_ADMIN,
      USER.ROLES.USERS_MANAGER,
    ];
  }

  checkAdminPermissions(req, res, next) {
    return this._applyMiddleware(
      this.generalAdmins,
      req, res, next
    );
  }

  checkPoweredUserPermissions(req, res, next) {
    return this._applyMiddleware(
      this.userManagers,
      req, res, next
    );
  }

  checkUserPermissions(req, res, next) {
    console.log(2222222);
    return this._applyMiddleware(
      USER.ROLES_ENUM,
      req, res, next
    );
  }

  checkCustomPermissions(authorities) {
    return async (req, res, next) => {
      return this._applyMiddleware(
        authorities,
        req, res, next
      );
    };
  }

  async _applyMiddleware(authorities, req, res, next) {
    try {
      await SessionService.addUserToRequest(req);
      if (!req.user || !req.user.email) throw boom.unauthorized(ERRORS.USER.INVALID);
      await this._checkAuthorizedPermissions(authorities, req.user.email);
      next();
    } catch (error) {
      next(error);
    }
  }

  async _checkAuthorizedPermissions(authorities, email) {
    if (!Array.isArray(authorities)) throw Error('Expected authorities to be a list');
    const user = await UserModel.findOne({ email });
    if (!user) throw boom.notFound(ERRORS.USER.NOT_FOUND);
    if (!user.roles) throw boom.unauthorized(ERRORS.USER.INVALID);
    const matchedAuthorities = authorities.filter(role => user.roles.includes(role));
    if (!matchedAuthorities.length) throw boom.unauthorized(ERRORS.UNAUTHORIZED);
  }
}

export const Authorizer = new MiddlewareService();