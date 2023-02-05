interface Thumbnail {
  height: number;
  url: string;
  width: number;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
}
