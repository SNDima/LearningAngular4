import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { BookDetailComponent } from "./components/book-detail/book-detail.component";

@NgModule({
    declarations: [
        AppComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ]
})
export class AppModuleShared {
}
