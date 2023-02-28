import numeral from "numeral";

interface MetaDataCardProps {
    viewCount: number;
    description: string;
}

function DescriptionCard({ viewCount, description }: MetaDataCardProps) {
    return (
        <div className="h-28 cursor-pointer rounded-xl bg-yt-badge-chip-background p-3 hover:bg-yt-button-chip-background-hover">
            <p className="text-sm font-semibold">{`${numeral(viewCount).format("0,0")} views`}</p>
            <p className="overflow-hidden text-ellipsis whitespace-pre text-sm font-medium line-clamp-3">
                {description}
            </p>
        </div>
    );
}

export default DescriptionCard;
