import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import YtSearch from "../../api/ytSearch";
import { useApiContext } from "../../context/ApiContext";
import ResultCard from "./ResultCard";

export default function SearchResult() {
    const { query } = useParams();
    const { search } = useApiContext();
    const {
        isLoading,
        error,
        data: searchResults,
    } = useQuery(["search", query], () => search.getSearchResult(query ?? ""), {
        enabled: !!query,
        refetchOnWindowFocus: false,
    });

    return (
        <main className="md:flex md:justify-center">
            {isLoading ? (
                <p>Loading</p>
            ) : (
                // TODO: add proper type check here
                <section className="max-w-4xl px-6">
                    <ul className="w-full">
                        {searchResults?.map(({ id, snippet }: any) => (
                            <li key={id} className="my-4">
                                <Link to={`/watch/${id}`}>
                                    <ResultCard
                                        thumbnails={snippet.thumbnails}
                                        title={snippet.title}
                                        channelTitle={snippet.channelTitle}
                                        description={snippet.description}
                                        publishedAt={snippet.publishedAt}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    );
}
