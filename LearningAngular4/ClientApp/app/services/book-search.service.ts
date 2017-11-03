import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Book } from "../entities/book";

@Injectable()
export class BookSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Book[]> {
        return this.http.get(`api/books/search/${term}`)
            .map(response => response.json() as Book[]);
    }
}