import Card from "../../components/Card/Card";
import numeral from "numeral";

interface ChannelCardProps {
    thumbnailURL: string;
    title: string;
    stats: number;
}

export default function ChannelCard({ thumbnailURL, title, stats }: ChannelCardProps) {
    return (
        <Card orientation="horizontal">
            <img src={thumbnailURL} className="thumbnail mr-3 h-10 w-10 rounded-full" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Stats>{`${numeral(stats).format("0.0a")} subscribers`}</Card.Stats>
            </Card.Body>
        </Card>
    );
}
