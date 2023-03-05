export default function IconButton({
    onClick,
    className,
    children,
}: {
    className?: string;
    onClick: () => void;
    children: JSX.Element;
}) {
    return (
        <button
            className={`h-10 w-10 rounded-full p-0 hover:bg-yt-button-chip-background-hover ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
