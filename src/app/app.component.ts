import { Component } from '@angular/core';
import { ISortData } from '../interfaces/sort-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'youtube-client';

  isListItemsShow: boolean = false;

  isSortByIncreasingViews: boolean = false;

  isSortByIncreasingDate: boolean = false;

  isSortByWord: boolean = false;

  sortWord: string | null = null;

  changeSortBy(payload: ISortData) {
    if (payload.type === 'view') {
      this.isSortByIncreasingViews = payload.isIncrease;
    } else if (payload.type === 'date') {
      this.isSortByIncreasingDate = payload.isIncrease;
    } else if (payload.type === 'word') {
      this.isSortByWord = payload.isIncrease;
      this.sortWord = payload.word as string;
    }
  }
}
