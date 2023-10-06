import { createContext, useContext } from "react";
import YoutubeClient from "../api/YoutubeClient";
import YtChannels from "../api/ytChannels";
import YtSearch from "../api/ytSearch";
import YtVideos from "../api/ytVideos";

interface YoutubeAPIContextInterface {
    search: YtSearch;
    videos: YtVideos;
    channels: YtChannels;
}

const YoutubeAPIContext = createContext<YoutubeAPIContextInterface | undefined>(undefined);
const YtClient = new YoutubeClient();
const search = new YtSearch(YtClient);
const videos = new YtVideos(YtClient);
const channels = new YtChannels(YtClient);

export function YoutubeAPIProvider({ children }: { children: React.ReactNode }) {
    const providerValue = {
        search,
        videos,
        channels,
    };

    return <YoutubeAPIContext.Provider value={providerValue}>{children}</YoutubeAPIContext.Provider>;
}

export function useYoutubeAPI() {
    const context = useContext(YoutubeAPIContext);

    if (!context) {
        throw new Error("The context must be used within YoutubeAPIProvider");
    }

    return context;
}
