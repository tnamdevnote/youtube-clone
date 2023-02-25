import { useQueries, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVideoById } from "../api/video";
import { getChannelInfo } from "../api/channels";
import Card from "../components/Card/Card";
import { getRelatedVideo } from "../api/search";

export default function Watch() {
  const { videoId } = useParams();

  const { data: watch } = useQuery(
    ["video", videoId],
    async () => await getVideoById(videoId ?? ""),
    {
      enabled: !!videoId,
      refetchOnWindowFocus: false,
    }
  );

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

  console.log(results);
  return (
    <main className="watch flex h-full flex-col place-items-center">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <section className="watch__container w-full p-6 lg:w-8/12 xl:max-w-5xl">
          <article className="watch__player min-h-64 aspect-video w-full ">
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
            <div className="watch__metadata">
              <h2 className="watch__title text-xl font-semibold">
                {watch.snippet.title}
              </h2>
              <div className="watch__channelinfo my-2">
                <Card orientation="horizontal" className="h-11">
                  <Card.Thumbnail
                    thumbnails={channelInfo?.snippet.thumbnails}
                    className="h-10 w-10 rounded-full"
                  />
                  <Card.Body>
                    <Card.Title className="mb-0 font-bold">
                      {channelInfo?.snippet.title}
                    </Card.Title>
                    <Card.Stats>
                      {`${channelInfo?.statistics.subscriberCount} subscribers`}
                    </Card.Stats>
                  </Card.Body>
                </Card>
              </div>
              <Card className="h-28 cursor-pointer bg-yt-badge-chip-background hover:bg-yt-button-chip-background-hover">
                <Card.Body className="p-3">
                  <Card.Text className="text-sm font-semibold">
                    {`${watch.statistics.viewCount} views`}
                  </Card.Text>
                  <Card.Text className="truncate text-sm font-medium">
                    {watch.snippet.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <aside className="watch__related">
              {relatedVideos?.map(({ id, snippet }: any) => (
                <Card key={id.videoId} orientation="horizontal">
                  <Card.Thumbnail
                    thumbnails={snippet.thumbnails}
                    className=""
                  />
                  <Card.Body>
                    <Card.Title>{snippet.title}</Card.Title>
                    <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                    <Card.Text className="truncate text-sm font-medium">
                      {snippet.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </aside>
          </div>
        </section>
      )}
    </main>
  );
}
