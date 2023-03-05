export default function IconButton({
    onClick,
    className,
    children,
}: {
    className?: string;
    onClick: () => void;
    children: JSX.Element;
}) {
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    onClick();
};
    return (
        <button
            className={`h-10 w-10 rounded-full p-0 hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
