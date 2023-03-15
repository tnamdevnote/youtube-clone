import { AxiosInstance } from "axios";
import { axios } from "./axios";

export default class YtSearch {
    private axios: AxiosInstance;
    private endpoint: string;

    constructor() {
        this.axios = axios;
        this.endpoint = "/search";
    }

    async getSearchResult(queryString: string) {
        return this.axios
            .get(this.endpoint, {
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
        return this.axios
            .get(this.endpoint, {
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
