const express = require('express')
const router = express.Router()
const grpc = require('grpc')
// const protoLoader = require('@grpc/proto-loader')

const booksProto = grpc.load('routes/books.proto')
const grpcHost = '0.0.0.0:50051'
const client = new booksProto.books.BookService(grpcHost, grpc.credentials.createInsecure())

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Books page');
});

router.get('/list', async function (req, res, next) {
  res.send({
    booksProto,
    load: grpc.load,
    books: await listBooks()
  })
});

async function listBooks() {
  return new Promise((resolve, reject) => {
    client.list({}, function (error, books) {
      return resolve({ error, books })
    })
  })
}

module.exports = router
