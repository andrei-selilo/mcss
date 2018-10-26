const grpc = require('grpc')

const booksProto = grpc.load('books.proto')
const grpcHost = 'localhost:50051'
const client = new booksProto.books.BookService(grpcHost, grpc.credentials.createInsecure())

async function listBooks() {
    return new Promise((resolve, reject) => {
        client.list({}, function (error, books) {
            return resolve({ error, books: JSON.stringify(books) })
        })
    })
}

async function main() {
    console.log(await listBooks())
    console.log({ booksProto, client })
}

main()
