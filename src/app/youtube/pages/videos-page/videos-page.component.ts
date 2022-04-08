import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchVideoService } from '../../services/search-video.service';

@Component({
  selector: 'videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent implements OnInit {
  @Input() isSortByIncreasingViews: boolean = false;

  @Input() isSortByIncreasingDate: boolean = false;

  @Input() isSortByWord: boolean = false;

  @Input() sortWord: string | null = null;

  isListItemsShow: Subject<boolean> | boolean = false;

  constructor(private searchVideoService: SearchVideoService) { }

  ngOnInit(): void {
    this.getIsShowVideosList();
  }

  getIsShowVideosList(): void {
    this.searchVideoService.getIsShowVideosList()
      .subscribe((isShow) => {
        this.isListItemsShow = isShow;
      });
  }
}
