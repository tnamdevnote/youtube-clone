import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../api/search";
import Card from "../components/Card/Card";

export default function SearchResult() {
  const { query } = useParams();
  const { isLoading, error, data } = useQuery(
    ["search"],
    async () =>
      fetch(`data/searchResults.json`).then((res) => {
        console.log("fetching");
        return res.json();
      }),
    // async () => await getSearchResult(query ?? ""),
    { staleTime: 5000 }
  );

  console.log(data);
  return (
    <main className="flex place-content-center">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        // TODO: add proper type check here
        <section className=" grid grid-cols-1">
          {data.items.map(({ id, snippet }: any) => (
            <div key={id.videoId} className="card-horizontal mt-4 max-h-48">
              <Card id={id.videoId} orientation="horizontal">
                <Card.Thumbnail thumbnails={snippet.thumbnails} />
                <Card.Body>
                  <Card.Title>{snippet.title}</Card.Title>
                  <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                  <Card.Text>{snippet.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
