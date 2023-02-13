import { useQuery } from "@tanstack/react-query";
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
    }
  );

  return (
    <main className="flex place-content-center">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        // TODO: add proper type check here
        <section className="">
          {data.items.map(({ id, snippet }: any) => (
            <Card
              key={id.videoId}
              id={id.videoId}
              className="grid__card-horizontal mt-4"
              orientation="horizontal"
            >
              <Card.Thumbnail
                className="w-2/5 shrink-0"
                thumbnails={snippet.thumbnails}
              />
              <Card.Body>
                <Card.Title>{snippet.title}</Card.Title>
                <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                <Card.Text>{snippet.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </section>
      )}
    </main>
  );
}
