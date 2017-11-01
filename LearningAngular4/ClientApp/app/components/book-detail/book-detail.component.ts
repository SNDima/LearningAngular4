import { Component, Input } from '@angular/core';

import { Book } from "../../entities/book";

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book: Book;
}