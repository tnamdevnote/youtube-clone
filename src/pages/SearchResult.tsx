import { useQuery } from "@tanstack/react-query";
import { FormattedDate } from "react-intl";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../api/search";
import Card from "../components/Card/Card";

export default function SearchResult() {
  const { query } = useParams();
  const { isLoading, error, data } = useQuery(
    ["search", query],
    // async () =>
    //   fetch(`data/searchResults.json`).then((res) => {
    //     console.log("fetching");
    //     return res.json();
    //   }),
    // { staleTime: 5000 }
    async () => await getSearchResult(query ?? ""),
    {
      enabled: !!query,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main className="md:flex md:justify-center">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        // TODO: add proper type check here
        <section className="px-2">
          {data.items.map(({ id, snippet }: any) => (
            <Card
              key={id.videoId}
              id={id.videoId}
              className="mt-4 max-h-60 max-w-5xl"
              orientation="horizontal"
            >
              <Card.Thumbnail
                className="w-2/5 shrink-0"
                thumbnails={snippet.thumbnails}
              />
              <Card.Body className="w-2/5 sm:w-3/5">
                <Card.Title className="text-xl">{snippet.title}</Card.Title>
                <Card.Stats>
                  <FormattedDate value={snippet.publishedAt} />
                </Card.Stats>
                <Card.Subtitle className="mt-4">
                  {snippet.channelTitle}
                </Card.Subtitle>
                <Card.Text className="mt-4">{snippet.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </section>
      )}
    </main>
  );
}
