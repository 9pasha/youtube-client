import { Video } from './video';

export interface IVideosData {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: Array<Video>
}

interface IPageInfo {
  totalResults: number,
  resultsPerPage: number,
}
