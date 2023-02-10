import { Thumbnails } from "./types";

interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return <div>{children}</div>;
}

function Thumbnail({
  orientation,
  thumbnails,
}: {
  orientation?: "left" | "top";
  thumbnails: Thumbnails;
}) {
  return (
    <img
      className="w-full rounded-2xl"
      src={thumbnails.medium.url}
      alt="Thumbnails"
    />
  );
}

function Body({ children }: Props) {
  return <div className="h-26">{children}</div>;
}

function Title({ children }: Props) {
  return (
    <h2 className="mt-2 mb-1 max-h-11 overflow-x-hidden text-ellipsis whitespace-nowrap sm:max-h-10 sm:text-sm md:text-sm">
      {children}
    </h2>
  );
}

function Subtitle({ children }: Props) {
  return <h3 className="text-xs text-yt-text-secondary">{children}</h3>;
}

function Text({ children }: Props) {
  return <p>{children}</p>;
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
