
import YoutubeClient from "./YoutubeClient";

export default class YtSearch {
    private apiClient: YoutubeClient;

    constructor(apiClient: YoutubeClient) {
        this.apiClient = apiClient;
    }

    async getSearchResult(queryString: string) {
        return this.apiClient
            .search({
                params: {
                    part: "snippet",
                    maxResults: 25,
                    type: "video",
                    q: queryString,
                },
            })
            .then((res) => res.data.items)
            .then((items) => items.map((item: any) => ({ ...item, id: item.id.videoId })));
    }

    async getRelatedVideo(videoId: string) {
        return this.apiClient
            .search({
                params: {
                    part: "snippet",
                    maxResults: 25,
                    relatedToVideoId: videoId,
                    type: "video",
                },
            })
            .then((res) => res.data.items)
            .then((items) => items.map((item: any) => ({ ...item, id: item.id.videoId })));
    }
}
