import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface SearchBarProps {
  onFocus?: () => void;
}

export default function SearchBar({ onFocus }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          placeholder="Search"
          value={input}
          onChange={handleChange}
          onFocus={onFocus}
        />
        <button type="button">
          <CloseIcon />
        </button>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
