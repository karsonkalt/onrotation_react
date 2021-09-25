import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";

class TracklistShow extends Component {
  render() {
    return (
      <>
        <h4>Tracklist Show {this.props.match.params.id}</h4>
        <TrackContainer tracks={tracks} />
      </>
    );
  }
}

export default TracklistShow;
