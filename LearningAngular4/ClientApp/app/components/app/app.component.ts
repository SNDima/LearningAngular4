import { Component, OnInit } from '@angular/core';

import { Book } from "../../entities/book";
import { BookService } from "../../services/book.service";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Моя библиотека';
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
