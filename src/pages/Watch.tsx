import { useQueries, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getVideoById } from "../api/video";
import { getChannelInfo } from "../api/channels";
import Card from "../components/Card/Card";
import { getRelatedVideo } from "../api/search";
import { FormattedDate } from "react-intl";
import numeral from "numeral";
import TimeFormatter from "../components/TimeFormatter/TimeFormatter";

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
        <div className="flex w-full flex-col p-6 lg:max-w-screen-xl lg:flex-row lg:justify-between">
          <section className="watch__container lg:mr-6 lg:min-w-0">
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
              <div className="watch__metadata">
                <h2 className="watch__title text-xl font-semibold">
                  {watch.snippet.title}
                </h2>
                <section className="watch__channelInfo my-2">
                  <Card orientation="horizontal">
                    <img
                      src={channelInfo?.snippet.thumbnails.medium.url}
                      className="thumbnail mr-4 h-10 w-10 rounded-full"
                    />
                    <Card.Body>
                      <Card.Title>{channelInfo?.snippet.title}</Card.Title>
                      <Card.Stats>
                        {`${numeral(
                          channelInfo?.statistics.subscriberCount
                        ).format("0a")} subscribers`}
                      </Card.Stats>
                    </Card.Body>
                  </Card>
                </section>
                <section className="h-28 cursor-pointer rounded-2xl bg-yt-badge-chip-background hover:bg-yt-button-chip-background-hover">
                  <div className="p-3">
                    <p className="text-sm font-semibold">
                      {`${numeral(watch.statistics.viewCount).format(
                        "0,0"
                      )} views`}
                    </p>
                    <p className="truncate text-sm font-medium">
                      {watch.snippet.description}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <aside className="watch__related flex-initial lg:w-96">
            <ul>
              {relatedVideos?.map(({ id, snippet }: any) => (
                <li className="mb-2 h-24">
                  <Link to={`/watch/${id.videoId}`}>
                    <Card key={id.videoId} orientation="horizontal">
                      <Card.Thumbnail thumbnails={snippet.thumbnails} />
                      <Card.Body>
                        <Card.Title>{snippet.title}</Card.Title>
                        <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                        <Card.Stats>
                          <TimeFormatter isoDate={snippet.publishedAt} />
                        </Card.Stats>
                      </Card.Body>
                    </Card>
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
