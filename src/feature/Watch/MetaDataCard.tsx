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
        isMore &&
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };

    return (
        <div
            className={`${
                isMore
                    ? "h-fit cursor-default"
                    : "h-28 hover:bg-yt-button-chip-background-hover dark:hover:bg-yt-button-chip-background-hover-dark"
            } cursor-pointer rounded-xl bg-yt-badge-chip-background p-3 dark:bg-yt-badge-chip-background-dark`}
            onClick={showMore}
        >
            <p className="text-sm font-semibold dark:text-yt-text-primary-dark">{`${numeral(viewCount).format(
                "0.0a"
            )} views`}</p>
            <p
                className={`${
                    isMore
                        ? "whitespace-pre-wrap"
                        : "w-72 overflow-hidden text-ellipsis whitespace-pre-line line-clamp-3"
                } relative text-sm font-medium dark:text-yt-text-primary-dark`}
            >
                {description}
                <button
                    className={`${
                        isMore ? "flex flex-col" : "absolute right-0 bottom-0 "
                    } rounded-md bg-gray-300 bg-opacity-100 font-bold dark:bg-yt-base-background-dark`}
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
