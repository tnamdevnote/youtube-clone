import Card from "../../components/Card/Card";
import { Thumbnails } from "../../components/Card/types";
import TimeFormatter from "../../components/TimeFormatter/TimeFormatter";

interface RelatedCardProps {
    thumbnails: Thumbnails;
    title: string;
    channelTitle: string;
    publishedAt: Date;
}

export default function RelatedCard({ thumbnails, title, channelTitle, publishedAt }: RelatedCardProps) {
    return (
        <Card orientation="horizontal">
            <Card.Thumbnail thumbnails={thumbnails} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{channelTitle}</Card.Subtitle>
                <Card.Stats>
                    <TimeFormatter isoDate={publishedAt} />
                </Card.Stats>
            </Card.Body>
        </Card>
    );
}
