import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'
import { BookServiceClient, BookServiceService } from '../protos/books/books_grpc_pb'
import { BookIdRequest, Book, BookList, Empty } from '../protos/books/books_pb'
import { ERRORS } from '../metrics/error'
import { Server } from 'tls';

class Service {

  private client: any
  private server: any

  constructor({ client, server }) {
    this.client = client
    this.server = server
  }

  public Client(): any {
    return this.client
  }

  public Server(): any {
    return this.client
  }

  public createClient() {}


}

export const UsersService = new Service()