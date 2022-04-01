import { Component, Input, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { IVideo } from '../../interfaces/video';

@Component({
  selector: 'video-info-cards-list',
  templateUrl: './video-info-cards-list.component.html',
  styleUrls: ['./video-info-cards-list.component.scss'],
})

export class VideoInfoCardsListComponent implements OnInit {
  @Input() isSortByIncreasingViews: boolean = false;

  @Input() isSortByIncreasingDate: boolean = false;

  @Input() isSortByWord: boolean = false;

  @Input() sortWord: string | null = null;

  videos: Array<IVideo> | undefined;

  constructor(private _videosService: VideosService) { }

  ngOnInit(): void {
    this.videos = this._videosService.getVideos();
    console.log(this.videos);
  }
}
