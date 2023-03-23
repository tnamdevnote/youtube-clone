import YoutubeClient from "./YoutubeClient";

export default class YtVideos {
    private apiClient: YoutubeClient;

    constructor(apiClient: YoutubeClient) {
        this.apiClient = apiClient;
    }

    async getTrendingVideos() {
        return this.apiClient
            .videos({
                params: {
                    part: "snippet,  contentDetails, statistics",
                    chart: "mostPopular",
                    maxResults: 25,
                    regionCode: "US",
                },
            })
            .then((res) => res.data.items);
    }

    async getVideoById(videoId: string) {
        return this.apiClient
            .videos({
                params: {
                    part: "snippet, contentDetails, statistics",
                    id: videoId,
                },
            })
            .then((res) => res.data.items[0]);
    }
}
