import IconButton from "../IconButton/IconButton";
import useBoolean from "../../hooks/useBoolean";
import { MoreHoriz } from "@mui/icons-material";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useDarkModeContext } from "../../context/DarkModeContext";

function Dropdown() {
    const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();
    const { state: darkMode, dispatch } = useDarkModeContext();
    const ref = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
                close();
            }
        };

        document.addEventListener("click", (e) => handleClickOutside(e));

        return () => document.removeEventListener("click", (e) => handleClickOutside(e));
    }, []);

    return (
        <>
            <IconButton onClick={open}>
                <MoreHoriz />
            </IconButton>
            {isOpen && (
                <ul
                    ref={ref}
                    className={`absolute right-2 z-20 w-60 translate-y-2 rounded-xl bg-yt-menu-background py-2 shadow-2xl shadow-gray-600 dark:bg-yt-menu-background-dark dark:shadow-gray-900`}
                >
                    <li
                        className="cursor-pointer px-6 py-2 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => dispatch({ type: "USER_DEVICE" })}
                    >
                        Use device theme
                    </li>
                    <li
                        className="cursor-pointer px-6 py-2 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => dispatch({ type: "DARK_THEME" })}
                    >
                        Dark theme
                    </li>
                    <li
                        className="cursor-pointer px-6 py-2 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => dispatch({ type: "LIGHT_THEME" })}
                    >
                        Light theme
                    </li>
                </ul>
            )}
        </>
    );
}

export default Dropdown;
