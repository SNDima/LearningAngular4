import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { BooksComponent } from "./components/books/books.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookService } from "./services/book.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { AppModuleRouting } from "./app.module.routing";

@NgModule({
    declarations: [
        AppComponent,
        BooksComponent,
        BookDetailComponent,
        DashboardComponent,
        BookSearchComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppModuleRouting
    ],
    providers: [
        BookService
    ]
})
export class AppModuleShared {
}
