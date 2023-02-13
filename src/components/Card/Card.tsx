import { Thumbnails } from "./types";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Card({
  id,
  className,
  orientation = "vertical",
  children,
}: {
  id: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}) {
  return (
    <Link to={`/watch/${id}`}>
      <div
        className={`card flex ${className} gap-4 ${
          orientation === "horizontal" ? "flex-ro" : "flex-col"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}

function Thumbnail({
  className,
  thumbnails,
}: {
  className?: string;
  thumbnails: Thumbnails;
}) {
  return (
    // TODO: img size is not
    <div className={`card__thumbnail ${className}`}>
      <img
        className={`w-full rounded-2xl object-cover`}
        src={thumbnails.medium.url}
        alt="Thumbnails"
      />
    </div>
  );
}

function Body({ className, children }: Props) {
  return <div className={`${className}`}>{children}</div>;
}

function Title({ className, children }: Props) {
  return (
    <h2
      className={`card__title ${className} md:text-bas mb-1 max-h-11 overflow-x-hidden text-ellipsis whitespace-nowrap text-yt-text-primary sm:max-h-10 sm:text-sm`}
    >
      {children}
    </h2>
  );
}

function Subtitle({ className, children }: Props) {
  return (
    <h3
      className={`card__subtitle ${className} text-xs text-yt-text-secondary`}
    >
      {children}
    </h3>
  );
}

function Text({ className, children }: Props) {
  return (
    <p className={`card__text ${className} text-xs text-yt-text-secondary`}>
      {children}
    </p>
  );
}

function Stats({ className, children }: Props) {
  return (
    <p className={`card__stats ${className} text-xs text-yt-text-secondary`}>
      {children}
    </p>
  );
}

Card.Thumbnail = Thumbnail;
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.Stats = Stats;

export default Card;
