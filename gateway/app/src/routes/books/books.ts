import express from 'express'
const router = express.Router()

import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'

const protoFileName = 'routes/books.proto'
const grpcHost = 'service1:50051'

const protoOptions = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
const packageDefinition = protoLoader.loadSync(protoFileName, protoOptions)
const packageObject = grpc.loadPackageDefinition(packageDefinition)

const client = new packageObject.books.BookService(grpcHost, grpc.credentials.createInsecure())

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json('Books page')
});

router.get('/list', async function (req, res, next) {
  const books = await listBooks()
  res.json(books)
});

async function listBooks() {
  return new Promise((resolve, reject) => {
    client.list({}, function (error, books) {
      return resolve({ error, books })
    })
  })
}

export default router
