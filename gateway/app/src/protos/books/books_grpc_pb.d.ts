// package: books
// file: books.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as books_pb from "./books_pb";

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IBookServiceService_IList;
    insert: IBookServiceService_IInsert;
    get: IBookServiceService_IGet;
    delete: IBookServiceService_IDelete;
    watch: IBookServiceService_IWatch;
}

interface IBookServiceService_IList extends grpc.MethodDefinition<books_pb.Empty, books_pb.BookList> {
    path: string; // "/books.BookService/List"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<books_pb.Empty>;
    requestDeserialize: grpc.deserialize<books_pb.Empty>;
    responseSerialize: grpc.serialize<books_pb.BookList>;
    responseDeserialize: grpc.deserialize<books_pb.BookList>;
}
interface IBookServiceService_IInsert extends grpc.MethodDefinition<books_pb.Book, books_pb.Empty> {
    path: string; // "/books.BookService/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<books_pb.Book>;
    requestDeserialize: grpc.deserialize<books_pb.Book>;
    responseSerialize: grpc.serialize<books_pb.Empty>;
    responseDeserialize: grpc.deserialize<books_pb.Empty>;
}
interface IBookServiceService_IGet extends grpc.MethodDefinition<books_pb.BookIdRequest, books_pb.Book> {
    path: string; // "/books.BookService/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<books_pb.BookIdRequest>;
    requestDeserialize: grpc.deserialize<books_pb.BookIdRequest>;
    responseSerialize: grpc.serialize<books_pb.Book>;
    responseDeserialize: grpc.deserialize<books_pb.Book>;
}
interface IBookServiceService_IDelete extends grpc.MethodDefinition<books_pb.BookIdRequest, books_pb.Empty> {
    path: string; // "/books.BookService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<books_pb.BookIdRequest>;
    requestDeserialize: grpc.deserialize<books_pb.BookIdRequest>;
    responseSerialize: grpc.serialize<books_pb.Empty>;
    responseDeserialize: grpc.deserialize<books_pb.Empty>;
}
interface IBookServiceService_IWatch extends grpc.MethodDefinition<books_pb.Empty, books_pb.Book> {
    path: string; // "/books.BookService/Watch"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<books_pb.Empty>;
    requestDeserialize: grpc.deserialize<books_pb.Empty>;
    responseSerialize: grpc.serialize<books_pb.Book>;
    responseDeserialize: grpc.deserialize<books_pb.Book>;
}

export const BookServiceService: IBookServiceService;

export interface IBookServiceServer {
    list: grpc.handleUnaryCall<books_pb.Empty, books_pb.BookList>;
    insert: grpc.handleUnaryCall<books_pb.Book, books_pb.Empty>;
    get: grpc.handleUnaryCall<books_pb.BookIdRequest, books_pb.Book>;
    delete: grpc.handleUnaryCall<books_pb.BookIdRequest, books_pb.Empty>;
    watch: grpc.handleServerStreamingCall<books_pb.Empty, books_pb.Book>;
}

export interface IBookServiceClient {
    list(request: books_pb.Empty, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    list(request: books_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    list(request: books_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    insert(request: books_pb.Book, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    insert(request: books_pb.Book, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    insert(request: books_pb.Book, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    get(request: books_pb.BookIdRequest, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    get(request: books_pb.BookIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    get(request: books_pb.BookIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    delete(request: books_pb.BookIdRequest, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: books_pb.BookIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: books_pb.BookIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    watch(request: books_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<books_pb.Book>;
    watch(request: books_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<books_pb.Book>;
}

export class BookServiceClient extends grpc.Client implements IBookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public list(request: books_pb.Empty, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    public list(request: books_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    public list(request: books_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.BookList) => void): grpc.ClientUnaryCall;
    public insert(request: books_pb.Book, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public insert(request: books_pb.Book, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public insert(request: books_pb.Book, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public get(request: books_pb.BookIdRequest, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    public get(request: books_pb.BookIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    public get(request: books_pb.BookIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Book) => void): grpc.ClientUnaryCall;
    public delete(request: books_pb.BookIdRequest, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: books_pb.BookIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: books_pb.BookIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: books_pb.Empty) => void): grpc.ClientUnaryCall;
    public watch(request: books_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<books_pb.Book>;
    public watch(request: books_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<books_pb.Book>;
}
