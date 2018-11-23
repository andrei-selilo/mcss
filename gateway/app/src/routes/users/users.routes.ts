import express from 'express'

import { ROUTES } from '../../metrics/routes'
import { UsersController } from '../../controllers/users'
import { Authorizer } from '../../middleware/authorizer'

const router = express.Router()

/**
 * @api {post} v1/users
 * @apiDescription Create user
 * @apiVersion 1.0.0
 * @apiName create
 * @apiGroup Users
 * @apiPermission Administrator | Group Manager | User Manager
 *
 * @apiParam {String} firstName               First name
 * @apiParam {String} lastName                Last name
 * @apiParam {String} email                   Email
 * @apiParam {String} phoneNumbers            Telephone numbers list - Mandatory for advisor
 * @apiParam {String} country                 Country
 * @apiParam {String} province                Province/State/Area
 * @apiParam {String} city                    City
 * @apiParam {String} postCode                Postal Code
 * @apiParam {String} pob                     PO Box
 * @apiParam {String} address                 Address
 * @apiParam {String} designations            Designations
 * @apiParam {String} roles                   List of roles
 * @apiParam {String} group                   Group
 * @apiParam {String} avatar                  Avatar
 * @apiParam {String} labels                  List of labels
 *
 * @apiSuccess  {String}  user.id             User's id
 * @apiSuccess  {String}  user.name           User's name
 * @apiSuccess  {String}  user.email          User's email
 * @apiSuccess  {String}  user.role           User's role
 * @apiSuccess  {Date}    user.createdAt      Timestamp
 *
 * @apiError (Unauthorized 401)  Unauthorized Permission limitation
 */
router.route(ROUTES.USERS.POST)
  .post(Authorizer.checkPoweredUserPermissions, UsersController.create)

/**
 * @api {get} v1/users
 * @apiDescription Get an Users list
 * @apiVersion 1.0.0
 * @apiName get
 * @apiGroup Users
 * @apiPermission Account Manager | Administrator | Group Manager | User Manager
 *
 * @apiSuccess  {String}  _id               User's id
 * @apiSuccess  {String}  firstName         User's name
 * @apiSuccess  {String}  lastName          User's email
 * @apiSuccess  {String}  email             User's role
 * @apiSuccess  {Date}    authService       authService Object
 * @apiSuccess  {Date}    createdAt         Timestamp
 * @apiSuccess  {Date}    updatedAt         Timestamp
 *
 * @apiError (Unauthorized 401)  Unauthorized Permission limitation
 */
router.route(ROUTES.USERS.GET)
  .get(Authorizer.checkUserPermissions, UsersController.get)

/**
 * @api {get} v1/users/me
 * @apiDescription Get current user from session
 * @apiVersion 1.0.0
 * @apiName getMe
 * @apiGroup Users
 * @apiPermission Account Manager | Administrator | Group Manager | User Manager
 *
 * @apiSuccess  {String}  _id               User's id
 * @apiSuccess  {String}  firstName         User's name
 * @apiSuccess  {String}  lastName          User's email
 * @apiSuccess  {String}  email             User's role
 * @apiSuccess  {Date}    authService       authService Object
 * @apiSuccess  {Date}    createdAt         Timestamp
 * @apiSuccess  {Date}    updatedAt         Timestamp
 *
 * @apiError (Unauthorized 401)  Unauthorized Permission limitation
 */
router.route(ROUTES.USERS.GET_ME)
  .get(Authorizer.checkUserPermissions, UsersController.getMe)

/**
 * @api {get} v1/users/:id
 * @apiDescription Get user by id
 * @apiVersion 1.0.0
 * @apiName getById
 * @apiGroup Users
 * @apiPermission Account Manager | Administrator | Group Manager | User Manager
 *
 * @apiSuccess  {String}  _id               User's id
 * @apiSuccess  {String}  firstName         User's name
 * @apiSuccess  {String}  lastName          User's email
 * @apiSuccess  {String}  email             User's role
 * @apiSuccess  {Date}    authService       authService Object
 * @apiSuccess  {Date}    createdAt         Timestamp
 * @apiSuccess  {Date}    updatedAt         Timestamp
 *
 * @apiError (Unauthorized 401)  Unauthorized Permission limitation
 */
router.route(ROUTES.USERS.GET_ONE)
  .get(Authorizer.checkPoweredUserPermissions, UsersController.getById)
//
// /**
//  * @api {post} v1/users
//  * @apiDescription Create user
//  * @apiVersion 1.0.0
//  * @apiName create
//  * @apiGroup Users
//  * @apiPermission Administrator | Group Manager | User Manager
//  *
//  * @apiParam {String} firstName               First name
//  * @apiParam {String} lastName                Last name
//  * @apiParam {String} email                   Email
//  * @apiParam {String} phoneNumbers            Telephone numbers list - Mandatory for advisor
//  * @apiParam {String} country                 Country
//  * @apiParam {String} province                Province/State/Area
//  * @apiParam {String} city                    City
//  * @apiParam {String} postCode                Postal Code
//  * @apiParam {String} pob                     PO Box
//  * @apiParam {String} address                 Address
//  * @apiParam {String} designations            Designations
//  * @apiParam {String} roles                   List of roles
//  * @apiParam {String} group                   Group
//  * @apiParam {String} avatar                  Avatar
//  * @apiParam {String} labels                  List of labels
//  *
//  * @apiSuccess  {String}  user.id             User's id
//  * @apiSuccess  {String}  user.name           User's name
//  * @apiSuccess  {String}  user.email          User's email
//  * @apiSuccess  {String}  user.role           User's role
//  * @apiSuccess  {Date}    user.createdAt      Timestamp
//  *
//  * @apiError (Unauthorized 401)  Unauthorized Permission limitation
//  */
// router.route(ROUTES.USERS.POST)
//   .post(Authorizer.checkPoweredUserPermissions, UsersController.create)

/**
 * @api {put} v1/users/:id
 * @apiDescription Update user
 * @apiVersion 1.0.0
 * @apiName updateById
 * @apiGroup Users
 * @apiPermission Administrator | Group Manager | User Manager
 *
 * @apiParam {String} firstName               First name
 * @apiParam {String} lastName                Last name
 * @apiParam {String} email                   Email
 * @apiParam {String} phoneNumbers            Telephone numbers list - Mandatory for advisor
 * @apiParam {String} country                 Country
 * @apiParam {String} province                Province/State/Area
 * @apiParam {String} city                    City
 * @apiParam {String} postCode                Postal Code
 * @apiParam {String} pob                     PO Box
 * @apiParam {String} address                 Address
 * @apiParam {String} designations            Designations
 * @apiParam {String} roles                   List of roles
 * @apiParam {String} group                   Group
 * @apiParam {String} avatar                  Avatar
 * @apiParam {String} labels                  List of labels
 *
 * @apiSuccess  {String}  user.id             User's id
 * @apiSuccess  {String}  user.name           User's name
 * @apiSuccess  {String}  user.email          User's email
 * @apiSuccess  {String}  user.role           User's role
 * @apiSuccess  {Date}    user.createdAt      Timestamp
 *
 * @apiError (Unauthorized 401)  Unauthorized Permission limitation
 */
router.route(ROUTES.USERS.PUT)
  .put(Authorizer.checkPoweredUserPermissions, UsersController.updateById)

export const UserRoutes = router