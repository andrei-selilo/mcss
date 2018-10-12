var express = require('express')
var router = express.Router()

// var grpc = require('grpc')
// var booksProto = grpc.load('books.proto')
// let grpcHost = '0.0.0.0:50051'
// var client = new booksProto.books.BookService(grpcHost, grpc.credentials.createInsecure())

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ a: 1 });
});

router.get('/list', function(req, res, next) {
  res.send({ a: 1 });
});

module.exports = router;
