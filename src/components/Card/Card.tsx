import { Thumbnails } from "./types";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

function Card({
  id,
  orientation = "vertical",
  children,
}: {
  id: string;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}) {
  return (
    <Link to={`/watch/${id}`}>
      <div
        className={`w-full gap-4 ${
          orientation === "horizontal" ? "flex" : "block"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}

function Thumbnail({ thumbnails }: { thumbnails: Thumbnails }) {
  return (
    <img className="rounded-2xl" src={thumbnails.medium.url} alt="Thumbnails" />
  );
}

function Body({ children }: Props) {
  return <div className="h-26">{children}</div>;
}

function Title({ children }: Props) {
  return (
    <h2 className="mt-2 mb-1 max-h-11 overflow-x-hidden text-ellipsis whitespace-nowrap text-yt-text-primary sm:max-h-10 sm:text-sm md:text-sm">
      {children}
    </h2>
  );
}

function Subtitle({ children }: Props) {
  return <h3 className="text-xs text-yt-text-secondary">{children}</h3>;
}

function Text({ children }: Props) {
  return <p className="text-xs text-yt-text-secondary">{children}</p>;
}

function Stats({ children }: Props) {
  return <p className="text-xs text-yt-text-secondary">{children}</p>;
}

Card.Thumbnail = Thumbnail;
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.Stats = Stats;

export default Card;
