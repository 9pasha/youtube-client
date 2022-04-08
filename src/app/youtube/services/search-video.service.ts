import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SearchVideoService {
  private isShowVideosList: BehaviorSubject<boolean>;

  constructor() {
    this.isShowVideosList = new BehaviorSubject<boolean>(false);
  }

  getIsShowVideosList(): Observable<boolean> {
    return this.isShowVideosList.asObservable();
  }

  showVideosList(): void {
    this.isShowVideosList.next(true);
  }

  hideVideosList(): void {
    this.isShowVideosList.next(false);
  }
}
