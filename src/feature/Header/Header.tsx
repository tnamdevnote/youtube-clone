import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBoolean from "../../hooks/useBoolean";

export default function Header() {
  const { value: isSearch, setTrue: setDisplaySearch } = useBoolean();
  return (
    <header className="flex h-14 sm:justify-between">
      <div className="start w-14 bg-yt-menu-background sm:w-auto">
        <Logo />
      </div>
      <div className="center w-14 basis-full bg-yt-menu-background sm:basis-1/2 md:max-w-xl">
        <SearchBar />
      </div>
      <div className="end w-14 bg-yt-menu-background">Dropdown</div>
    </header>
  );
}
