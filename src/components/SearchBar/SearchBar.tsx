import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <form>
        <SearchIcon />
        <input placeholder="Search" />
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
