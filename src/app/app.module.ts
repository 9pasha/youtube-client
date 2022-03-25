import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoInfoCardComponent } from './video-info-card/video-info-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchVideoComponent } from './search-video/search-video.component';
import { VideoInfoCardsListComponent } from './video-info-cards-list/video-info-cards-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoInfoCardComponent,
    HeaderComponent,
    SearchVideoComponent,
    VideoInfoCardsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
