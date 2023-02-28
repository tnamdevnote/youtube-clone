import { Thumbnails } from "./types";
import { CardContext, useCardContext } from "./CardContext";
import { useMemo } from "react";

interface Props {
  children: React.ReactNode;
}

function Card({
  orientation = "vertical",
  children,
}: {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}) {
  const providerValue = useMemo(() => ({ orientation }), [orientation]);
  return (
    <CardContext.Provider value={providerValue}>
      <div
        className={`card flex h-full ${
          orientation === "horizontal" ? "max-h-48 flex-row" : "flex-col gap-4"
        }`}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

function Thumbnail({ thumbnails }: { thumbnails: Thumbnails }) {
  const { orientation } = useCardContext();
  return (
      <div
          className={`card__thumbnail aspect-video ${orientation === "horizontal" ? "mr-4 h-full max-w-sm" : "w-full"}`}
      >
          <img className={`w-full rounded-xl`} src={thumbnails.medium.url} alt="Thumbnails" />
      </div>
  );
}

function Body({ children }: Props) {
  const { orientation } = useCardContext();
  return (
    <div
      className={`card__body ${
        orientation === "horizontal" ? "w-3/5 sm:grow" : "w-auto"
      }`}
    >
      {children}
    </div>
  );
}

function Title({ children }: Props) {
  return (
    <h2
      className={`card__title max-h-11 overflow-x-hidden text-ellipsis leading-tight text-yt-text-primary line-clamp-2`}
    >
      {children}
    </h2>
  );
}

function Subtitle({ children }: Props) {
  return (
    <h3 className={`card__subtitle text-xs text-yt-text-secondary`}>
      {children}
    </h3>
  );
}

function Text({ children }: Props) {
  return (
    <p
      className={`card__text overflow-hidden overflow-ellipsis text-xs text-yt-text-secondary line-clamp-2`}
    >
      {children}
    </p>
  );
}

function Stats({ children }: Props) {
  return (
    <p className={`card__stats text-xs text-yt-text-secondary`}>{children}</p>
  );
}

Card.Thumbnail = Thumbnail;
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.Stats = Stats;

export default Card;
