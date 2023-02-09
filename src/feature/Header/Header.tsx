import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBoolean from "../../hooks/useBoolean";
import IconButton from "../../components/IconButton/IconButton";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const {
    value: isInputFocus,
    setTrue: showSearch,
    setFalse: hideSearch,
  } = useBoolean();
  const breakPoint = 600;

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
    <header className="flex h-14 items-center gap-2 px-2 sm:justify-between">
      <div className="start">
        {isInputFocus && !(screenWidth > breakPoint) ? (
          <IconButton onClick={hideSearch}>
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <Logo />
        )}
      </div>
      <div className="center flex flex-grow justify-end xs:justify-center">
        {isInputFocus || screenWidth > breakPoint ? (
          <SearchBar onFocus={showSearch} />
        ) : (
          <IconButton className="ml-auto" onClick={showSearch}>
            <SearchIcon />
          </IconButton>
        )}
      </div>
      <IconButton className="end" onClick={() => console.log("hello")}>
        <MoreHorizIcon />
      </IconButton>
    </header>
  );
}
