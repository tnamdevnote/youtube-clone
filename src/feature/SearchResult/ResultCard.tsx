import TimeFormatter from "../../components/TimeFormatter/TimeFormatter";
import Card from "../../components/Card/Card";
import { Thumbnails } from "../../components/Card/types";

interface ResultCardProps {
    thumbnails: Thumbnails;
    title: string;
    channelTitle: string;
    description: string;
    publishedAt: Date;
}

export default function ResultCard({ thumbnails, title, channelTitle, description, publishedAt }: ResultCardProps) {
    return (
        <Card orientation="horizontal">
            <Card.Thumbnail thumbnails={thumbnails} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Stats>
                    <TimeFormatter isoDate={publishedAt} />
                </Card.Stats>
                <div className="my-4">
                    <Card.Subtitle>{channelTitle}</Card.Subtitle>
                </div>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
