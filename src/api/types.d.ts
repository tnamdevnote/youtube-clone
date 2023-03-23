interface SearchResult {
    part: string;
    maxResults: number;
    type: "video" | "playlist" | "channel";
    q: string;
}

interface RelatedVideos {
    part: string;
    maxResults: number;
    relatedToVideoId: string;
    type: string;
}

interface TrendingVideos {
    part: string;
    chart: "mostPopular";
    maxResults: number;
    regionCode: string;
}

interface VideoById {
    part: string;
    id: string;
}

interface ChannelInfo {
    part: string;
    id: string;
}

export type Search = SearchResult | RelatedVideos;
export type Videos = TrendingVideos | VideoById;
export type Channels = ChannelInfo;

export interface Params<P> {
    params: P;
}
