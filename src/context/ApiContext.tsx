import { createContext, useContext } from "react";
import YoutubeClient from "../api/YoutubeClient";
import YtChannels from "../api/ytChannels";
import YtSearch from "../api/ytSearch";
import YtVideos from "../api/ytVideos";

interface ApiContextInterface {
    search: YtSearch;
    videos: YtVideos;
    channels: YtChannels;
}

const ApiContext = createContext<ApiContextInterface | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
    const YtClient = new YoutubeClient();
    const search = new YtSearch(YtClient);
    const videos = new YtVideos(YtClient);
    const channels = new YtChannels(YtClient);

    const providerValue = {
        search,
        videos,
        channels,
    };

    return <ApiContext.Provider value={providerValue}>{children}</ApiContext.Provider>;
}

export function useYoutubeAPI() {
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("The context must be used within ApiProvider");
    }

    return context;
}
