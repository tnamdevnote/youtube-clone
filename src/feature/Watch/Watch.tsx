import { useQueries, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getVideoById } from "../../api/video";
import { getChannelInfo } from "../../api/channels";
import { getRelatedVideo } from "../../api/search";

import MetadataCard from "./MetaDataCard";
import ChannelCard from "./ChannelCard";
import RelatedCard from "./RelatedCard";

export default function Watch() {
    const { videoId } = useParams();

    const { data: watch } = useQuery(["video", videoId], async () => await getVideoById(videoId ?? ""), {
        enabled: !!videoId,
        refetchOnWindowFocus: false,
    });

    const results = useQueries({
        queries: [
            {
                queryKey: ["channel", watch?.snippet.channelId],
                queryFn: async () => await getChannelInfo(watch?.snippet.channelId),
                staleTime: Infinity,
                enabled: !!watch?.snippet.channelId,
                refetchOnWindowFocus: false,
            },
            {
                queryKey: ["relatedVideo", videoId],
                queryFn: async () => await getRelatedVideo(videoId ?? ""),
                staleTime: Infinity,
                enabled: !!videoId,
                refetchOnWindowFocus: false,
            },
        ],
    });

    const isLoading = results.every((result) => result.isLoading);

    const channelInfo = results[0].data;
    const relatedVideos = results[1].data?.items;

    console.log(relatedVideos);

    return (
        <main className="watch flex h-full flex-col place-items-center">
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <div className="watch flex w-full flex-col p-6 lg:max-w-screen-xl lg:flex-row lg:justify-between">
                    <section className="watch__container w-full lg:mr-6 lg:min-w-0">
                        <article className="watch__player min-h-64 aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </article>
                        <div className="watch__below mt-2">
                            <h2 className="watch__title text-xl font-semibold">{watch.snippet.title}</h2>
                            <section className="watch__channelInfo my-2">
                                <ChannelCard
                                    thumbnailURL={channelInfo?.snippet.thumbnails.medium.url}
                                    title={channelInfo?.snippet.title}
                                    stats={channelInfo?.statistics.subscriberCount}
                                />
                            </section>
                            <section className="watch__description my-4">
                                <MetadataCard
                                    viewCount={watch.statistics.viewCount}
                                    description={watch.snippet.description}
                                />
                            </section>
                        </div>
                    </section>
                    <aside className="watch__related lg:w-4/12">
                        <ul>
                            {relatedVideos?.map(({ id, snippet }: any) => (
                                <li key={id.videoId} className="mb-2 h-24">
                                    <Link to={`/watch/${id.videoId}`}>
                                        <RelatedCard
                                            thumbnails={snippet.thumbnails}
                                            title={snippet.title}
                                            channelTitle={snippet.channelTitle}
                                            publishedAt={snippet.publishedAt}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            )}
        </main>
    );
}
