import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { BooksComponent } from "./components/books/books.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookService } from "./services/book.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        BooksComponent,
        BookDetailComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'books',
                component: BooksComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],
    providers: [
        BookService
    ]
})
export class AppModuleShared {
}
