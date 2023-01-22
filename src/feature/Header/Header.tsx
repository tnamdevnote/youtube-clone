import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBoolean from "../../hooks/useBoolean";
import IconButton from "../../components/IconButton/IconButton";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const {
    value: isSearch,
    setTrue: showSearch,
    toggle: toggleSearch,
  } = useBoolean();
  const breakPoint = 512;

  const handleScreenResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [handleScreenResize]);

  return (
    <header className="flex h-14 sm:justify-between">
      <div className="start w-14 bg-yt-menu-background sm:w-auto">
        {isSearch && !(screenWidth > breakPoint) ? (
          <IconButton onClick={() => toggleSearch()}>
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <Logo />
        )}
      </div>
      <div className="center flex w-14 basis-full bg-yt-menu-background sm:basis-1/2 md:max-w-xl">
        {isSearch || screenWidth > breakPoint ? (
          <SearchBar onFocus={showSearch} />
        ) : (
          <IconButton className="ml-auto" onClick={() => toggleSearch()}>
            <SearchIcon />
          </IconButton>
        )}
      </div>
      <div className="end w-14 bg-yt-menu-background">Dropdown</div>
    </header>
  );
}
