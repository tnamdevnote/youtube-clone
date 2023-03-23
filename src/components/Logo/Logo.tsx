import { Link } from "react-router-dom";
import yt_logo_rgb_light from "../../assets/logo/yt_logo_rgb_light.png";
import yt_logo_rgb_dark from "../../assets/logo/yt_logo_rgb_dark.png";
import { useDarkModeContext } from "../../context/DarkModeContext";

function Logo() {
    const { state } = useDarkModeContext();
    const { isDarkMode } = state;
    return (
        <Link to={"/"}>
            <img className="h-14 w-36 p-4" src={isDarkMode ? yt_logo_rgb_dark : yt_logo_rgb_light} alt="Youtube Home" />
        </Link>
    );
}

export default Logo;
