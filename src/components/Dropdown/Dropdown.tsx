import { IconButton } from "@mui/material";
import useBoolean from "../../hooks/useBoolean";
import { MoreHoriz } from "@mui/icons-material";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

function Dropdown() {
    const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();
    const ref = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
                close();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        open();
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <MoreHoriz />
            </IconButton>
            {isOpen && (
                <ul
                    ref={ref}
                    className={` absolute right-2 z-20 w-60 translate-y-2 rounded-lg bg-yt-menu-background py-4 shadow-2xl shadow-gray-600`}
                >
                    <li
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-yt-button-chip-background-hover"
                        onClick={close}
                    >
                        Use device theme
                    </li>
                    <li
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-yt-button-chip-background-hover"
                        onClick={close}
                    >
                        Dark theme
                    </li>
                    <li
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-yt-button-chip-background-hover"
                        onClick={close}
                    >
                        Light theme
                    </li>
                </ul>
            )}
        </>
    );
}

export default Dropdown;
