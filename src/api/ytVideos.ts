import { AxiosInstance } from "axios";
import { axios } from "./axios";

export default class YtVideos {
    private axios: AxiosInstance;
    private endpoint: string;

    constructor() {
        this.axios = axios;
        this.endpoint = "/videos";
    }

    async getTrendingVideos() {
        return this.axios
            .get(this.endpoint, {
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
        return this.axios
            .get(this.endpoint, {
                params: {
                    part: "snippet, contentDetails, statistics",
                    id: videoId,
                },
            })
            .then((res) => res.data.items[0]);
    }
}
