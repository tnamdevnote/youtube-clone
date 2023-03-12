import Card from "../../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getTrendingVideos } from "../../api/video";
import { FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
import TimeFormatter from "../../components/TimeFormatter/TimeFormatter";

export default function Home() {
    const { isLoading, error, data } = useQuery(["most-recent"], async () => await getTrendingVideos(), {
        staleTime: 10000,
    });

    return (
        <main className="flex h-full flex-col place-items-center dark:bg-yt-base-background-dark">
            {/* <section className="bg-yt-text-secondary">ChipBar</section> */}
            {isLoading ? (
                <p>Loading..</p>
            ) : (
                <section className="mt-8 grid w-full max-w-screen-2xl gap-4 px-14 xs:grid-cols-2 xs:px-0 sm:px-8 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {/* TODO: add proper type check here */}
                    {data.items.map(({ id, snippet }: any) => (
                        <div key={id} className="grid__card h-auto overflow-hidden">
                            <Link to={`/watch/${id}`}>
                                <Card>
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
                        </div>
                    ))}
                </section>
            )}
        </main>
    );
}
