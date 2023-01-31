import Card from "../components/Card/Card";

export default function Home() {
  return (
    <main className="flex h-full flex-col place-items-center">
      <section className="bg-yt-text-secondary">ChipBar</section>
      {/* <section className="h-screen"> */}
      <section className="grid w-full gap-4 px-4 2xl:px-40">
        <h1 className="text-4xl font-extrabold sm:col-span-2 sm:w-1/2 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6">
          Grid layout with Tailwind Css
        </h1>
        <div className="sm:card md:card lg:card xl:card card h-auto bg-yt-menu-background ">
          <Card>
            <Card.Thumbnail>Thumbnail</Card.Thumbnail>
            <Card.Body>
              <Card.Title>This is title</Card.Title>
              <Card.Subtitle>This is subtitle</Card.Subtitle>
              <Card.Stats>This is stats</Card.Stats>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
}
