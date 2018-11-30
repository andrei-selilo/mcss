// package: books
// file: books.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Book extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getAuthor(): string;
    setAuthor(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        id: number,
        title: string,
        author: string,
    }
}

export class BookList extends jspb.Message { 
    clearBooksList(): void;
    getBooksList(): Array<Book>;
    setBooksList(value: Array<Book>): void;
    addBooks(value?: Book, index?: number): Book;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookList.AsObject;
    static toObject(includeInstance: boolean, msg: BookList): BookList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookList;
    static deserializeBinaryFromReader(message: BookList, reader: jspb.BinaryReader): BookList;
}

export namespace BookList {
    export type AsObject = {
        booksList: Array<Book.AsObject>,
    }
}

export class BookIdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BookIdRequest): BookIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookIdRequest;
    static deserializeBinaryFromReader(message: BookIdRequest, reader: jspb.BinaryReader): BookIdRequest;
}

export namespace BookIdRequest {
    export type AsObject = {
        id: number,
    }
}
