import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchBarProps {
  onFocus?: () => void;
}

export default function SearchBar({ onFocus }: SearchBarProps) {
  return (
    <div className="flex items-center">
      <form>
        <SearchIcon />
        <input placeholder="Search" onFocus={onFocus} />
        <button type="button">
          <CloseIcon />
        </button>
      </form>
      <button type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}
