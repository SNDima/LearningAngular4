import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(
        private bookService: BookService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }

    onSelect(book: Book): void {
        this.selectedBook = book;
    }

    gotoDetail(): void {
        this.router.navigate(['/books', this.selectedBook.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.bookService.create(name)
            .then(book => {
                this.books.push(book);
            });
    }

    delete(book: Book): void {
        this.bookService.delete(book.id)
            .then(() => {
                this.books = this.books.filter(b => b !== book);
                if (this.selectedBook === book) {
                    this.selectedBook = new Book();
                }
            });
    }
}
