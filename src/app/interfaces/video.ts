export interface IVideo {
  kind: string,
  etag: string,
  id: string,
  snippet: IVideoSnippet,
  statistics: IVideoStatistics
}

interface IVideoSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IVideoThumbnails,
  channelTitle: string,
  tags: Array<string>,
  categoryId: string,
  liveBroadcastContent: string,
  localized: IVideoLocalize,
  defaultAudioLanguage: string
}

interface IVideoThumbnails {
  default: IVideoParams,
  medium: IVideoParams,
  high: IVideoParams,
  standard: IVideoParams,
  maxres: IVideoParams
}

interface IVideoParams {
  url: string,
  width: number,
  height: number
}

interface IVideoLocalize {
  title: string,
  description: string
}

interface IVideoStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
