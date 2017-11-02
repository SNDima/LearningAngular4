﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from "./components/books/books.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books/:id', component: BookDetailComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppModuleRouting {}