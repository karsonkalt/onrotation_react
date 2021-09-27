import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";
import IconText from "../layout/global/IconText";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
import SoundCloudPlayer from "../components/SoundCloudPlayer";

class TracklistShow extends Component {
  render() {
    return (
      <>
        <h4>
          <IconText
            icon="MusicNoteList"
            iconPadding="me-2"
            text={`Tracklist Show ${this.props.match.params.id}`}
          />
        </h4>
        <h6 className="mb-2 text-muted" style={{ display: "flex" }}>
          <a href={`/artists/${this.props.id}`} className="clickable-subheader">
            <IconText icon="Person" text="Artist" className="me-3" />
          </a>
          <IconText
            icon="CalendarEvent"
            text="June 14, 2012"
            className="me-3"
          />
        </h6>
        <TracklistCompletionBar
          numIdentifiedTracks={18}
          numTotalTracks={24}
          className="mb-3"
        />
        <SoundCloudPlayer />
        <TrackContainer tracks={tracks} />
      </>
    );
  }
}

export default TracklistShow;
