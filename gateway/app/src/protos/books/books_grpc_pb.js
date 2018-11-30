// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var books_pb = require('./books_pb.js');

function serialize_books_Book(arg) {
  if (!(arg instanceof books_pb.Book)) {
    throw new Error('Expected argument of type books.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_books_Book(buffer_arg) {
  return books_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_books_BookIdRequest(arg) {
  if (!(arg instanceof books_pb.BookIdRequest)) {
    throw new Error('Expected argument of type books.BookIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_books_BookIdRequest(buffer_arg) {
  return books_pb.BookIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_books_BookList(arg) {
  if (!(arg instanceof books_pb.BookList)) {
    throw new Error('Expected argument of type books.BookList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_books_BookList(buffer_arg) {
  return books_pb.BookList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_books_Empty(arg) {
  if (!(arg instanceof books_pb.Empty)) {
    throw new Error('Expected argument of type books.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_books_Empty(buffer_arg) {
  return books_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  list: {
    path: '/books.BookService/List',
    requestStream: false,
    responseStream: false,
    requestType: books_pb.Empty,
    responseType: books_pb.BookList,
    requestSerialize: serialize_books_Empty,
    requestDeserialize: deserialize_books_Empty,
    responseSerialize: serialize_books_BookList,
    responseDeserialize: deserialize_books_BookList,
  },
  insert: {
    path: '/books.BookService/Insert',
    requestStream: false,
    responseStream: false,
    requestType: books_pb.Book,
    responseType: books_pb.Empty,
    requestSerialize: serialize_books_Book,
    requestDeserialize: deserialize_books_Book,
    responseSerialize: serialize_books_Empty,
    responseDeserialize: deserialize_books_Empty,
  },
  get: {
    path: '/books.BookService/Get',
    requestStream: false,
    responseStream: false,
    requestType: books_pb.BookIdRequest,
    responseType: books_pb.Book,
    requestSerialize: serialize_books_BookIdRequest,
    requestDeserialize: deserialize_books_BookIdRequest,
    responseSerialize: serialize_books_Book,
    responseDeserialize: deserialize_books_Book,
  },
  delete: {
    path: '/books.BookService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: books_pb.BookIdRequest,
    responseType: books_pb.Empty,
    requestSerialize: serialize_books_BookIdRequest,
    requestDeserialize: deserialize_books_BookIdRequest,
    responseSerialize: serialize_books_Empty,
    responseDeserialize: deserialize_books_Empty,
  },
  watch: {
    path: '/books.BookService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: books_pb.Empty,
    responseType: books_pb.Book,
    requestSerialize: serialize_books_Empty,
    requestDeserialize: deserialize_books_Empty,
    responseSerialize: serialize_books_Book,
    responseDeserialize: deserialize_books_Book,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
