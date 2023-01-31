interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return <div>{children}</div>;
}

function Thumbnail({
  orientation,
  children,
}: { orientation?: "left" | "top" } & Props) {
  return <div>{children}</div>;
}

function Body({ children }: Props) {
  return <div>{children}</div>;
}

function Title({ children }: Props) {
  return <h2>{children}</h2>;
}

function Subtitle({ children }: Props) {
  return <h3>{children}</h3>;
}

function Text({ children }: Props) {
  return <p>{children}</p>;
}

function Stats({ children }: Props) {
  return <p>{children}</p>;
}

Card.Thumbnail = Thumbnail;
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Title;
Card.Text = Text;
Card.Stats = Stats;

export default Card;
