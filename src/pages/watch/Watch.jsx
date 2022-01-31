import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {/* <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/eYc81K1CN0E"
      /> */}
      <iframe className="video" src="https://www.youtube.com/embed/eYc81K1CN0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}