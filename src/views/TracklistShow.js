import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";
import IconText from "../layout/global/IconText";
import TracklistCompletionBar from "../components/TracklistCompletionBar";

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
        <h6>
          <IconText icon="Person" text="Artist" />
          <IconText icon="CalendarEvent" text="June 14, 2012" />
        </h6>
        <TracklistCompletionBar
          numIdentifiedTracks={18}
          numTotalTracks={24}
          className="mb-3"
        />
        <TrackContainer tracks={tracks} />
      </>
    );
  }
}

export default TracklistShow;