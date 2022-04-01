import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoInfoCardComponent } from './video-info-card/video-info-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchVideoComponent } from './search-video/search-video.component';
import { VideoInfoCardsListComponent } from './video-info-cards-list/video-info-cards-list.component';
import { SortVideosPanelComponent } from './sort-videos-panel/sort-videos-panel.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LogoComponent } from './logo/logo.component';
import { NzInputModule } from "ng-zorro-antd/input";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { MainComponent } from './main/main.component';
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { VideosService } from "../services/videos.service";
import { HighlightBorderWithDateDirective } from '../directives/highlight-border-with-date.directive';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons)
  .map(key => antDesignIcons[key]);

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
    HighlightBorderWithDateDirective
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
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
