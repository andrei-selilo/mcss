// import boom from 'boom'
// import { Auth0Service } from '../../services'
// import { UserModel } from '../../models/user.model'
import { ERRORS } from '../../metrics/error'
// import { BooksService } from '../../services'

import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'

// import { books } from '../../protos/books'
import { BookServiceClient, BookServiceService } from '../../protos/books/books_grpc_pb'
import { BookIdRequest, Book, BookList, Empty } from '../../protos/books/books_pb'

// const protoFileName = '../../protos/books.proto'
const grpcHost = 'service1:50051'
const client = new BookServiceClient(grpcHost, grpc.credentials.createInsecure());

// const protoOptions = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
// const packageDefinition = protoLoader.loadSync(protoFileName, protoOptions)
// const packageObject = grpc.loadPackageDefinition(packageDefinition)

// const client = new books.BookService((method: any, request: any, callback: Function) => {
//   const rpcPath: string = method.name;
//   console.log (`method.name: ${method.name} \nrequest.name: ${request.name}`)
//   callback({ a: 'this is not a client, suka'})
// })


class Controllers {
  static async create(req, res, next) {

  }

  static async get(req, res, next) {
    const request = new Empty()
    const list = await new Promise((resolve, reject) => {
      client.list(request, function (error, books) {
        return resolve({ error, books })
      })
    })
    res.json(list)
  }

  static async getById(req, res, next) {

  }

  static async updateById(req, res, next) {

  }
}

export const BooksController = Controllers