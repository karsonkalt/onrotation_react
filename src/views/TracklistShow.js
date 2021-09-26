import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";
import IconText from "../layout/global/IconText";

class TracklistShow extends Component {
  render() {
    return (
      <>
        <h4>
          <IconText
            icon="MusicNoteList"
            text={`Tracklist Show ${this.props.match.params.id}`}
          />
        </h4>
        <TrackContainer tracks={tracks} />
      </>
    );
  }
}

export default TracklistShow;
