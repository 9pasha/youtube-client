import { IVideo } from './video';

export interface IVideosData {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: Array<IVideo>
}

interface IPageInfo {
  totalResults: number,
  resultsPerPage: number,
}
