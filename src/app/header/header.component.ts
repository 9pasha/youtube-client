import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISortData } from "../../interfaces/sort-data";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Output() sortBy = new EventEmitter<ISortData>();
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  isShowSortPanel = false;

  toggleSortPanel() {
    this.isShowSortPanel = !this.isShowSortPanel;
  }

  emitSortBy(data: ISortData) {
    this.sortBy.emit(data);
  }

  searchItems() {
    this.search.emit();
  }
}
