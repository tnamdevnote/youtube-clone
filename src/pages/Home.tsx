import Card from "../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getTrendingVideos, getVideoById } from "../api/video";
import {
  FormattedNumber,
  FormattedRelativeTime,
  FormattedDate,
  useIntl,
} from "react-intl";

export default function Home() {
  const { isLoading, error, data } = useQuery(
    ["most-recent"],
    async () =>
      fetch(`data/mostPopular.json`).then((res) => {
        console.log("fetching");
        return res.json();
      }),
    { staleTime: 5000 }
  );

  console.log(data, isLoading, error);
  return (
    <main className="flex h-full flex-col place-items-center">
      <section className="bg-yt-text-secondary">ChipBar</section>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <section className="grid w-full max-w-screen-2xl gap-4 px-14 xs:grid-cols-2 xs:px-0 sm:px-8 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {/* TODO: add proper type check here */}
          {data.items.map(({ id, snippet }: any) => (
            <div
              key={id}
              className="sm:card md:card lg:card xl:card h-auto overflow-hidden"
            >
              <Card>
                <Card.Thumbnail thumbnails={snippet.thumbnails} />
                <Card.Body>
                  <Card.Title>{snippet.title}</Card.Title>
                  <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                  <Card.Stats>
                    <FormattedDate value={snippet.publishedAt} />
                  </Card.Stats>
                </Card.Body>
              </Card>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
