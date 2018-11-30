import * as express from 'express'

import { ROUTES } from '../../metrics/routes'
// import { Authorizer } from '../../middleware/authorizer'
import { BooksController } from '../../controllers/books'

const router = express.Router()

/**
 * @api {get} v1/static
 * @apiDescription Get the static data
 * @apiVersion 1.0.0
 * @apiName get
 * @apiGroup Static
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
router.route(ROUTES.BOOKS.GET).get(BooksController.get) //Authorizer.checkAdminPermissions

export const BooksRoutes = router
