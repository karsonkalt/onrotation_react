import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";
import IconText from "../layout/global/IconText";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
import SoundCloudPlayer from "../components/SoundCloudPlayer";
import { Button } from "react-bootstrap";

class TracklistShow extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between ">
          <div>
            <h4>
              <IconText
                icon="MusicNoteList"
                iconPadding="me-3"
                text={`Tracklist Show ${this.props.match.params.id}`}
              />
            </h4>
            <h6 className="mb-2 text-muted" style={{ display: "flex" }}>
              <a
                href={`/artists/${this.props.id}`}
                className="clickable-subheader"
              >
                <IconText icon="Person" text="Artist" className="me-4" />
              </a>
              <IconText
                icon="CalendarEvent"
                text="June 14, 2012"
                className="me-4"
              />
            </h6>
          </div>
          <div>
            <Button variant="outline-secondary" size="sm">
              <IconText icon="PencilSquare" text="Edit" />
            </Button>
          </div>
        </div>
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
