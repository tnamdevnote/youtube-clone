import { AxiosInstance } from "axios";
import { axios } from "./axios";

export default class YtChannels {
    private axios: AxiosInstance;
    private endpoint: string;

    constructor() {
        this.axios = axios;
        this.endpoint = "/channels";
    }

    async getChannelInfo(channelId: string) {
        return this.axios
            .get(this.endpoint, {
                params: {
                    part: "snippet, contentDetails, statistics",
                    id: channelId,
                },
            })
            .then((res) => res.data.items[0]);
    }
}
