import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import useBoolean from "../../hooks/useBoolean";

interface SearchBarProps {
  onFocus: () => void;
}

export default function SearchBar({ onFocus }: SearchBarProps) {
  const [input, setInput] = useState("");
  const {
    value: iconHidden,
    setTrue: hideIcon,
    setFalse: showIcon,
  } = useBoolean(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const handleFocus = () => {
    showIcon();
    onFocus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="flex items-center">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="flex h-10 items-center rounded-l-3xl border border-ytd-searchbox-border-color p-1 pl-4">
          <span className={`${iconHidden ? "hidden" : ""} pr-1`}>
            <SearchIcon />
          </span>
          <input
            className="text-yt-text-primary-inverse focus:outline-none"
            placeholder="Search"
            value={input}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={hideIcon}
          />
          <button className="hidden p-0" type="button">
            <CloseIcon />
          </button>
        </div>
        <button
          className="h-10 rounded-r-3xl border border-ytd-searchbox-border-color px-4 hover:bg-ytd-searchbox-border-color"
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
