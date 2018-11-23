import express from 'express'
import { ROUTES } from '../metrics/routes'

import { HomeRoutes } from './home'
import { UserRoutes } from './users'

const router = express.Router()

router.use(ROUTES.HOME.ROOT, HomeRoutes)
// router.use(ROUTES.USERS.ROOT, UserRoutes)

export default router
