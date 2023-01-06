import { Link } from "react-router-dom";
import yt_logo_rgb_light from "../assets/logo/yt_logo_rgb_light.png";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="flex h-14 justify-between">
      <Link to={"/"}>
        <img className="h-14 p-4" src={yt_logo_rgb_light} alt="Youtube Home" />
      </Link>
      <SearchBar />
      <div className="h-14 w-14 bg-yt-menu-background"></div>
    </header>
  );
}
