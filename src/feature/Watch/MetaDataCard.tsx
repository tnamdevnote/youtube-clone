import numeral from "numeral";
import useBoolean from "../../hooks/useBoolean";

interface MetaDataCardProps {
    viewCount: number;
    description: string;
}

function DescriptionCard({ viewCount, description }: MetaDataCardProps) {
    const { value: isMore, setTrue: showMore, toggle: toggleExpander } = useBoolean();

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleExpander();
    };

    return (
        <div
            className={`${
                isMore ? "h-fit cursor-default" : "h-28 hover:bg-yt-button-chip-background-hover"
            } relative cursor-pointer rounded-xl bg-yt-badge-chip-background p-3 `}
            onClick={showMore}
        >
            <p className="text-sm font-semibold">{`${numeral(viewCount).format("0,0")} views`}</p>
            <p
                className={`${
                    isMore
                        ? "whitespace-pre-wrap"
                        : "w-72 overflow-hidden text-ellipsis whitespace-pre-line line-clamp-3"
                } relative text-sm font-medium `}
            >
                {description}
                <button
                    className={`${isMore ? "flex flex-col" : "absolute right-0 bottom-0 "} font-bold`}
                    type="button"
                    onClick={handleToggle}
                >
                    {isMore ? "Show less" : "Show more"}
                </button>
            </p>
        </div>
    );
}

export default DescriptionCard;
