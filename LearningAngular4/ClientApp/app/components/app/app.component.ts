import { Component } from '@angular/core';
import { Book } from "../../entities/book";
import { BOOKS } from "../../mocks/mock-books";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Моя библиотека';
    books = BOOKS;
    selectedBook: Book;

    onSelect(book: Book): void {
        this.selectedBook = book;
    }
}
