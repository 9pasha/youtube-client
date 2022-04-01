import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from "../interfaces/video";

@Pipe({
  name: 'sortVideosBySearchTitle'
})
export class SortVideosBySearchTitle implements PipeTransform {
  transform(array: Array<IVideo> | undefined, isSearching: boolean, word: string | null): Array<IVideo> | undefined {
    if (!array || !isSearching) {
      return array;
    }

    return array.filter((video: IVideo) => video.snippet.title.match(word as string));
  }
}
