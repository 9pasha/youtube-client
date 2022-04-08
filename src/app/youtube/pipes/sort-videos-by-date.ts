import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../../interfaces/video';

@Pipe({
  name: 'sortVideosByDate',
})
export class SortVideosByDate implements PipeTransform {
  transform(array: Array<IVideo> | undefined, isIncreasing: boolean):
  Array<IVideo> | undefined {
    if (!array) {
      return array;
    }

    return array.sort((a: IVideo, b: IVideo) => {
      if (isIncreasing) {
        return new Date(b.snippet.publishedAt).getTime()
          - new Date(a.snippet.publishedAt).getTime();
      }

      return new Date(a.snippet.publishedAt).getTime()
        - new Date(b.snippet.publishedAt).getTime();
    });
  }
}
