import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from "../../entities/book";
import { BookService } from "../../services/book.service"

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    book: Book;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.bookService.getBook(Number(params.get('id'))))
            .subscribe(book => this.book = book);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.bookService.update(this.book)
            .then(() => this.goBack());
    }
}