import { Injectable } from '@angular/core';
import { mockData } from '../constants/mockData';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor() { }

  getVideos() {
    return mockData.items;
  }
}
