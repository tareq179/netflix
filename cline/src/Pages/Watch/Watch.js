import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
import "./Watch.scss";

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}

export default Watch;
