import { Component } from "react";
import Track from "../components/Track";

class TrackContainer extends Component {
  renderTracks = () => {
    return this.props.tracks.map(
      ({
        name,
        artist,
        label,
        order,
        cueTime,
        identifier,
        id,
        suggestedTrackIdentification,
      }) => {
        return (
          <Track
            name={name}
            artist={artist}
            label={label}
            identifier={identifier}
            cueTime={cueTime}
            order={order}
            id={id}
            suggestedTrackIdentification={suggestedTrackIdentification}
          />
        );
      }
    );
  };

  render() {
    return this.renderTracks();
  }
}

export default TrackContainer;
