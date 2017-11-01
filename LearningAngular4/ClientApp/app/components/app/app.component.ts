import { Component } from '@angular/core';
import { Book } from "../../entities/book";

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Мои книги';
    book: Book = {
        id: 1,
        name: 'Старик и море'
    }
}
