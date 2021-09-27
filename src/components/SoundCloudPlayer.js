import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import IconText from "../layout/global/IconText";

class SoundCloudPlayer extends Component {
  onPlay = () => {
    console.log("Click");
  };

  render() {
    return (
      <div className="mb-3 rounded" style={{ overflow: "hidden" }}>
        <iframe
          style={{
            height: "300",
            width: "100%",
            scrolling: "no",
            frameBorder: "no",
          }}
          id="soundCloudPlayer"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1119953389&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    );
  }
}

export default SoundCloudPlayer;
