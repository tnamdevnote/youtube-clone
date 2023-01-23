import { Link } from "react-router-dom";
import yt_logo_rgb_light from "../../assets/logo/yt_logo_rgb_light.png";

function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <img className="h-14 p-4" src={yt_logo_rgb_light} alt="Youtube Home" />
      </Link>
    </div>
  );
}

export default Logo;