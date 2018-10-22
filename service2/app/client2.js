const grpc = require('grpc')

const booksProto = grpc.load('books.proto')
const grpcHost = '0.0.0.0:50051'
const client = new booksProto.books.BookService(grpcHost, grpc.credentials.createInsecure())

async function listBooks() {
    return new Promise((resolve, reject) => {
        console.log(grpc.load)
        client.list({}, function (error, books) {
            return resolve({ error, books: JSON.stringify(books) })
        })
    })
}

async function main() {
    console.log(await listBooks())
}

main()
