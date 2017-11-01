import { Injectable } from '@angular/core';

import { Book } from "../entities/book";
import { BOOKS } from "../mocks/mock-books";

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBooksSlowly(): Promise<Book[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getBooks()), 2000);
        });
    }

    getBook(id: number): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }
}