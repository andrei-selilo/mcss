// import boom from 'boom'
// import { Auth0Service } from '../../services'
// import { UserModel } from '../../models/user.model'
import { ERRORS } from '../../metrics/error'
import { promisify } from 'util'
// import { BooksService } from '../../services'

import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'

// import { books } from '../../protos/books'
import { BookServiceClient, BookServiceService } from '../../protos/books/books_grpc_pb'
import { BookIdRequest, Book, BookList, Empty } from '../../protos/books/books_pb'

// const protoFileName = '../../protos/books.proto'

// const protoOptions = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
// const packageDefinition = protoLoader.loadSync(protoFileName, protoOptions)
// const packageObject = grpc.loadPackageDefinition(packageDefinition)

// const client = new books.BookService((method: any, request: any, callback: Function) => {
//   const rpcPath: string = method.name;
//   console.log (`method.name: ${method.name} \nrequest.name: ${request.name}`)
//   callback({ a: 'this is not a client, suka'})
// })

class Controllers {

  private static clientHost: string = 'service1:50051'
  private static client: BookServiceClient = new BookServiceClient(Controllers.clientHost, grpc.credentials.createInsecure())

  static async create(req, res, next) {

  }

  static async get(req, res, next) {
    const request = new Empty()

    const result = await new Promise<{ error?: any, response?: any }>((resolve, reject) => {
      Controllers.client.list(request, (error, response) => resolve({ error, response }))
    })
    const bookList: BookList = result.response

    // const promise = promisify<Empty, BookList>(Controllers.client.list)
    // const result = await promise(request)

    res.json(bookList.toObject())
  }

  static async getById(req, res, next) {

  }

  static async updateById(req, res, next) {

  }
}

export const BooksController = Controllers