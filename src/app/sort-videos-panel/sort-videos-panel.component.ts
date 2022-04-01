import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { ISortData } from '../../interfaces/sort-data';

@Component({
  selector: 'sort-videos-panel',
  templateUrl: './sort-videos-panel.component.html',
  styleUrls: ['./sort-videos-panel.component.scss'],
})

export class SortVideosPanelComponent implements OnInit {
  @Output() sortBy = new EventEmitter<ISortData>();

  isSortByIncreaseViews: boolean = false;

  isSortByIncreaseDate: boolean = false;

  isSortByWord: boolean = false;

  sortWord: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sortByDate() {
    this.isSortByIncreaseDate = !this.isSortByIncreaseDate;

    this.sortBy.emit({ type: 'date', isIncrease: this.isSortByIncreaseDate });
  }

  sortByViews() {
    this.isSortByIncreaseViews = !this.isSortByIncreaseViews;

    this.sortBy.emit({ type: 'view', isIncrease: this.isSortByIncreaseViews });
  }

  sortByWord() {
    this.isSortByWord = !this.isSortByWord;

    this.sortBy.emit({
      type: 'word',
      isIncrease: this.isSortByWord,
      word: this.sortWord,
    });
  }
}
