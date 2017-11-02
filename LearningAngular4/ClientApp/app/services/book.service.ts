import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Book } from "../entities/book";

@Injectable()
export class BookService {
    private booksUrl = 'api/books';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {}

    getBooks(): Promise<Book[]> {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(this.handleError);
    }

    getBook(id: number): Promise<Book> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    update(book: Book): Promise<Book> {
        return this.http.put(this.booksUrl, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(() => book)
            .catch(this.handleError);
    }

    create(name: string): Promise<Book> {
        return this.http
            .post(this.booksUrl, JSON.stringify(name), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Book)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}