import express from 'express'
import { ROUTES } from '../metrics/routes'

import { HomeRoutes } from './home'
import { UserRoutes } from './users'
import { BooksRoutes } from './books'

const router = express.Router()

router.use(ROUTES.HOME.ROOT, HomeRoutes)
router.use(ROUTES.BOOKS.ROOT, BooksRoutes)

export default router
