import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/SearchBar/SearchBar";
import useBoolean from "../hooks/useBoolean";
import IconButton from "../components/IconButton/IconButton";
import Dropdown from "../components/Dropdown/Dropdown";

export default function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { value: isInputFocus, setTrue: showSearch, setFalse: hideSearch } = useBoolean();
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
        <header className="fixed z-10 flex h-14 w-full flex-none items-center gap-2 bg-yt-menu-background px-2 dark:bg-yt-base-background-dark sm:justify-between">
            <div className="start min-w-max">
                {isInputFocus && !(screenWidth > breakPoint) ? (
                    <IconButton onClick={hideSearch}>
                        <ArrowBackIcon />
                    </IconButton>
                ) : (
                    <Logo />
                )}
            </div>
            <div className="center flex grow justify-end xs:justify-center sm:w-full sm:max-w-2xl sm:grow-0">
                {isInputFocus || screenWidth > breakPoint ? (
                    <SearchBar onFocus={showSearch} />
                ) : (
                    <IconButton className="ml-auto" onClick={showSearch}>
                        <SearchIcon />
                    </IconButton>
                )}
            </div>
            <div className="end flex-none">
                <Dropdown />
            </div>
        </header>
    );
}
