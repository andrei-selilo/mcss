import "dotenv/config"
import express from "express"
import createError from "http-errors"
import path from "path"
import cookieParser from "cookie-parser"
// import bodyParser from "body-parser"
import morgan from "morgan"
import fs from 'fs'
// import rfs from 'rotating-file-stream'

import apiRoutes from './routes'
import { ROUTES } from './metrics/routes'
import { errorHandler } from './middleware/errorHandler.middleware'

const app = express()

const logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// const accessLogStream = rfs('access.log', {
//   interval: '1d',
//   path: logDirectory
// })


// View
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug')
// app.set('header', )

// Log
app.use(morgan('dev')) // morgan('combined', { stream: accessLogStream })

// Body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(ROUTES.API_DOCS.ROOT, express.static(path.join(__dirname, '/public/docs')))
app.use(ROUTES.ROOT, apiRoutes)
app.use(errorHandler())

export default app
