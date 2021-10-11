import { Component } from "react";
import TrackContainer from "../../containers/TrackContainer";
import tracks from "../../trackData";
import IconText from "../../layout/global/IconText";
import TracklistCompletionBar from "../../components/TracklistCompletionBar";
import VideoPlayer from "../../components/VideoPlayer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class TracklistEdit extends Component {
  state = {
    playedSeconds: "0",
  };

  handleNowPlaying = ({ playedSeconds }) => {
    this.setState({ playedSeconds: playedSeconds });
  };

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
              <Link
                to={`/artists/${this.props.id}`}
                className="clickable-subheader"
              >
                <IconText icon="Person" text="Artist" className="me-4" />
              </Link>
              <IconText
                icon="CalendarEvent"
                text="June 14, 2012"
                className="me-4"
              />
            </h6>
          </div>
          <div>
            <Link to={`/tracklists/${this.props.match.params.id}/edit`}>
              <Button variant="outline-secondary me-3" size="sm">
                <IconText icon="PencilSquare" text="Edit" />
              </Button>
            </Link>
            <Button variant="outline-primary" size="sm">
              <IconText icon="Bookmark" text="Bookmark" />
            </Button>
          </div>
        </div>
        <TracklistCompletionBar
          numIdentifiedTracks={18}
          numTotalTracks={24}
          className="mb-3"
        />
        <VideoPlayer
          url="https://www.youtube.com/watch?v=4xFM5vG59sk&feature=emb_title&ab_channel=Lost%26Found%2FGuyJ"
          onProgress={this.handleNowPlaying}
        />
        <TrackContainer
          tracks={tracks}
          playedSeconds={this.state.playedSeconds}
        />
      </>
    );
  }
}

export default TracklistEdit;
