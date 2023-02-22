import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVideoById } from "../api/video";
import Card from "../components/Card/Card";

export default function Watch() {
  const { videoId } = useParams();
  const { isLoading, error, data } = useQuery(
    ["video", videoId],
    async () => await getVideoById(videoId ?? ""),
    {
      enabled: !!videoId,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main className="watch flex h-full flex-col place-items-center">
      <section className="watch__container w-full p-6 lg:w-8/12 xl:max-w-5xl">
        <article className="watch__player min-h-64 aspect-video w-full ">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </article>
        <div className="watch__below mt-2">
          <div className="watch__metadata">
            <h2 className="watch__title text-xl font-semibold">
              눈부셔 이른 봄날을 너와 함께 걷는 게 𓂃𓂂𓏸 노리플라이 Playlist
            </h2>
            <div className="watch__channelinfo my-2 font-medium">
              노리플라이 / no reply
            </div>
            <Card className="h-28 cursor-pointer bg-yt-badge-chip-background hover:bg-yt-button-chip-background-hover">
              Title Text Test
            </Card>
          </div>
          <aside className="watch__related"></aside>
        </div>
      </section>
    </main>
  );
}
