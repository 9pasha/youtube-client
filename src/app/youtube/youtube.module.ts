import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconTestModule } from 'ng-zorro-antd/icon/testing';
import { NzImageModule } from 'ng-zorro-antd/image';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoInfoCardsListComponent } from './components/video-info-cards-list/video-info-cards-list.component';
import { VideoInfoCardComponent } from './components/video-info-card/video-info-card.component';
import { SortVideosByView } from './pipes/sort-videos-by-view';
import { SortVideosByDate } from './pipes/sort-videos-by-date';
import { SortVideosBySearchTitle } from './pipes/sort-videos-by-search-title';
import { HighlightBorderWithDateDirective } from './directives/highlight-border-with-date.directive';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';

@NgModule({
  declarations: [
    VideoInfoCardsListComponent,
    VideoInfoCardComponent,
    SortVideosByView,
    SortVideosByDate,
    SortVideosBySearchTitle,
    HighlightBorderWithDateDirective,
    VideosPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzIconTestModule,
    NzImageModule,
  ],
  exports: [
    VideoInfoCardsListComponent,
  ],
})
export class YoutubeModule { }
