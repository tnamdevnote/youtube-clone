import Axios, { AxiosInstance } from "axios";
import { ChannelInfo, Params, Search, Videos } from "./types";
export default class YoutubeClient {
    httpClient: AxiosInstance;

    constructor() {
        this.httpClient = Axios.create({
            baseURL: import.meta.env.VITE_YOUTUBE_API_BASE_URL,
            headers: { "X-goog-api-key": import.meta.env.VITE_YOUTUBE_API_KEY },
        });
    }

    async search(params: Params<Search>) {
        return this.httpClient.get("/search", params);
    }

    async videos(params: Params<Videos>) {
        return this.httpClient.get("/videos", params);
    }

    async channels(params: Params<ChannelInfo>) {
        return this.httpClient.get("/channels", params);
    }
}
