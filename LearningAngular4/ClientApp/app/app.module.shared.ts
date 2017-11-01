import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookService } from "./services/book.service";

@NgModule({
    declarations: [
        AppComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        BookService
    ]
})
export class AppModuleShared {
}
