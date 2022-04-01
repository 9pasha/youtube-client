import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { BrowserModule } from '@angular/platform-browser';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoInfoCardComponent } from './video-info-card/video-info-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchVideoComponent } from './search-video/search-video.component';
import { VideoInfoCardsListComponent } from './video-info-cards-list/video-info-cards-list.component';
import { SortVideosPanelComponent } from './sort-videos-panel/sort-videos-panel.component';
import { LogoComponent } from './logo/logo.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainComponent } from './main/main.component';
import { VideosService } from '../services/videos.service';
import { HighlightBorderWithDateDirective } from '../directives/highlight-border-with-date.directive';
import { SortVideosByView } from '../pipes/sort-videos-by-view';
import { SortVideosByDate } from '../pipes/sort-videos-by-date';
import { SortVideosBySearchTitle } from '../pipes/sort-videos-by-search-title';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons)
  .map((key) => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    VideoInfoCardComponent,
    HeaderComponent,
    SearchVideoComponent,
    VideoInfoCardsListComponent,
    SortVideosPanelComponent,
    LogoComponent,
    UserProfileComponent,
    MainComponent,
    HighlightBorderWithDateDirective,
    SortVideosByView,
    SortVideosByDate,
    SortVideosBySearchTitle,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    NzIconModule.forRoot(icons),
    NzLayoutModule,
    FormsModule,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
