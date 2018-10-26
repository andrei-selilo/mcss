const express = require('express')
const router = express.Router()
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const protoFileName = 'routes/books.proto'
const grpcHost = 'service1:50051'

const protoOptions = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
const packageDefinition = protoLoader.loadSync(protoFileName, protoOptions)
const packageObject = grpc.loadPackageDefinition(packageDefinition)

// const booksProto = grpc.load(protoFileName)

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

module.exports = router
