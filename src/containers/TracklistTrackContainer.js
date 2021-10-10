import { Component } from "react";
import TracklistTrack from "../components/TracklistTrack";

class TracklistTrackContainer extends Component {
  endTime = (index, tracks) => {
    return tracks[index + 1] && tracks[index + 1].cueTime
      ? tracks[index + 1].cueTime
      : "9:99:99";
  };

  renderTracks = () => {
    return this.props.tracks.map(
      (
        {
          name,
          artist,
          label,
          order,
          cueTime,
          identifier,
          id,
          suggestedTrackIdentification,
          identifiedDate,
        },
        index,
        tracks
      ) => {
        return (
          <TracklistTrack
            name={name}
            artist={artist}
            label={label}
            identifier={identifier}
            cueTime={cueTime}
            endTime={this.endTime(index, tracks)}
            order={order}
            id={id}
            suggestedTrackIdentification={suggestedTrackIdentification}
            identifiedDate={identifiedDate}
            playedSeconds={this.props.playedSeconds}
          />
        );
      }
    );
  };

  render() {
    return this.renderTracks();
  }
}

export default TracklistTrackContainer;
