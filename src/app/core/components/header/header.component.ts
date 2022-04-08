import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { ISortData } from '../../../../interfaces/sort-data';
import { SearchVideoService } from '../../../youtube/services/search-video.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Output() sortBy = new EventEmitter<ISortData>();

  constructor(private searchVideoService: SearchVideoService) { }

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
    this.searchVideoService.showVideosList();
  }
}
