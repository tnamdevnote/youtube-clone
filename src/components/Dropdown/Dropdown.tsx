import IconButton from "../IconButton/IconButton";
import useBoolean from "../../hooks/useBoolean";
import { MoreHoriz, Check, DarkMode, LightMode } from "@mui/icons-material";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Action, useDarkModeContext } from "../../context/DarkModeContext";

function Dropdown() {
    const { state, dispatch } = useDarkModeContext();
    const { mode, isDarkMode } = state;
    const ref = useRef<HTMLUListElement | null>(null);
    const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();

    const handleClick = (actionType: Action["type"]) => {
        dispatch({ type: actionType });
        close();
    };

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
            <IconButton onClick={open}>{isDarkMode ? <DarkMode /> : <LightMode />}</IconButton>
            {isOpen && (
                <ul
                    ref={ref}
                    className={`absolute right-2 z-20 w-60 translate-y-2 rounded-xl bg-yt-menu-background py-2 shadow-2xl shadow-gray-600 dark:bg-yt-menu-background-dark dark:shadow-gray-900`}
                >
                    <li
                        className="cursor-pointer py-2 pl-14 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => handleClick("USER_DEVICE")}
                    >
                        {mode === "userDevice" && <Check className="absolute left-4" />}
                        Use device theme
                    </li>
                    <li
                        className="relative cursor-pointer py-2 pl-14 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => handleClick("DARK_THEME")}
                    >
                        {mode === "dark" && <Check className="absolute left-4" />}
                        Dark theme
                    </li>
                    <li
                        className="cursor-pointer py-2 pl-14 text-sm hover:bg-yt-button-chip-background-hover dark:text-yt-text-primary-dark dark:hover:bg-yt-button-chip-background-hover-dark"
                        onClick={() => handleClick("LIGHT_THEME")}
                    >
                        {mode === "light" && <Check className="absolute left-4" />}
                        Light theme
                    </li>
                </ul>
            )}
        </>
    );
}

export default Dropdown;
