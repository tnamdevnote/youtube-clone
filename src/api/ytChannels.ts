import YoutubeClient from "./YoutubeClient";

export default class YtChannels {
    private apiClient: YoutubeClient;

    constructor(apiClient: YoutubeClient) {
        this.apiClient = apiClient;
    }

    async getChannelInfo(channelId: string) {
        return this.apiClient
            .channels({
                params: {
                    part: "snippet, contentDetails, statistics",
                    id: channelId,
                },
            })
            .then((res) => res.data.items[0]);
    }
}
