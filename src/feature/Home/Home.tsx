import Card from "../../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import TimeFormatter from "../../components/TimeFormatter/TimeFormatter";
import { useYoutubeAPI } from "../../context/YoutubeAPIContext";

export default function Home() {
    const { videos } = useYoutubeAPI();
    const {
        isLoading,
        error,
        data: trendingVideos,
    } = useQuery({ queryKey: ["most-recent"], queryFn: () => videos.getTrendingVideos(), staleTime: 10000 });
    console.log(videos);
    return (
        <main className="flex h-full flex-col place-items-center dark:bg-yt-base-background-dark">
            {/* <section className="bg-yt-text-secondary">ChipBar</section> */}
            {isLoading ? (
                <p>Loading..</p>
            ) : (
                <section className="mt-8 grid w-full max-w-screen-2xl gap-4 px-8 xs:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {/* TODO: add proper type check here */}
                    {trendingVideos.map(({ id, snippet }: any) => (
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
