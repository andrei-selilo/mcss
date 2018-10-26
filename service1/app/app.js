const grpc = require('grpc')

const host = '0.0.0.0:50051'
const client = ''

const booksProto = grpc.load('books.proto')
const books = [
    { id: 123, title: 'A Tale of Two Cities', author: 'Charles Dickens' }
]

const server = new grpc.Server()
let bookStream

server.addProtoService(booksProto.books.BookService.service, {
    list: function (call, callback) {
        callback(null, books);
    },
    insert: function (call, callback) {
        var book = call.request;
        books.push(book);
        if (bookStream)
            bookStream.write(book);
        callback(null, {});
    },
    get: function (call, callback) {
        for (var i = 0; i < books.length; i++)
            if (books[i].id == call.request.id)
                return callback(null, books[i]);
        callback({
            code: grpc.status.NOT_FOUND,
            details: 'Not found'
        });
    },
    delete: function (call, callback) {
        for (var i = 0; i < books.length; i++) {
            if (books[i].id == call.request.id) {
                books.splice(i, 1);
                return callback(null, {});
            }
        }
        callback({
            code: grpc.status.NOT_FOUND,
            details: 'Not found'
        });
    },
    watch: function (stream) {
        bookStream = stream;
    }
});

server.bind(host, grpc.ServerCredentials.createInsecure())
server.start()
console.log('service1: grpc server running on:', host);


