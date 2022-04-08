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
import { VideosService } from '../services/videos.service';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons)
  .map((key) => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
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
    CoreModule,
    YoutubeModule,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
