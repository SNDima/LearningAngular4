import { Component, OnInit } from '@angular/core';

import { Book } from "../../entities/book";
import { BookService } from "../../services/book.service";

@Component({
    selector: 'my-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books: Book[];
    selectedBook: Book;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }

    onSelect(book: Book): void {
        this.selectedBook = book;
    }
}
