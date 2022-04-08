import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../../interfaces/video';

@Pipe({
  name: 'sortVideosByView',
})
export class SortVideosByView implements PipeTransform {
  transform(array: Array<IVideo> | undefined, isIncreasing: boolean): Array<IVideo> | undefined {
    if (!array) {
      return array;
    }

    return array.sort((a: IVideo, b: IVideo) => {
      if (isIncreasing) {
        return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
      }

      return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
    });
  }
}
