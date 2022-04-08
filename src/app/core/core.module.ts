import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SortVideosPanelComponent } from './components/sort-videos-panel/sort-videos-panel.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    UserProfileComponent,
    SortVideosPanelComponent,
    NotFoundPageComponent,
    LogoComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
    CoreRoutingModule,
  ],
})
export class CoreModule { }
