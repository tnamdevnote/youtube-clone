import { useQuery } from "@tanstack/react-query";
import { FormattedDate } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { getSearchResult } from "../../api/search";
import Card from "../../components/Card/Card";

export default function SearchResult() {
  const { query } = useParams();
  const { isLoading, error, data } = useQuery(
    ["search", query],
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
        <section className="max-w-4xl px-6">
          <ul className="w-full">
            {data.items.map(({ id, snippet }: any) => (
              <li className="my-4">
                <Link to={`/watch/${id.videoId}`}>
                  <Card key={id.videoId} orientation="horizontal">
                    <Card.Thumbnail thumbnails={snippet.thumbnails} />
                    <Card.Body>
                      <Card.Title>{snippet.title}</Card.Title>
                      <Card.Stats>
                        <FormattedDate value={snippet.publishedAt} />
                      </Card.Stats>
                      <Card.Subtitle>{snippet.channelTitle}</Card.Subtitle>
                      <Card.Text>{snippet.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
