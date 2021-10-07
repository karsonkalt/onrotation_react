import { Component } from "react";
import TrackContainer from "../../containers/TrackContainer";
import tracks from "../../data/trackData";
import IconText from "../../layout/global/IconText";
import TracklistCompletionBar from "../../components/TracklistCompletionBar";
import VideoPlayer from "../../components/VideoPlayer";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchTracklist } from "../../store/actions/tracklistActions";

class TracklistShow extends Component {
  componentDidMount() {
    this.props.fetchTracklist(this.props.match.params.id);
  }

  state = {
    playedSeconds: "0",
  };

  handleNowPlaying = ({ playedSeconds }) => {
    this.setState({ playedSeconds: playedSeconds });
  };

  render() {
    if (this.props.loading === true) {
      return <div>loading</div>;
    } else {
      return (
        <>
          <div className="d-flex justify-content-between ">
            <div>
              <h4>
                <IconText
                  icon="MusicNoteList"
                  iconPadding="me-3"
                  text={this.props.tracklist.name}
                />
              </h4>
              <h6 className="mb-2 text-muted" style={{ display: "flex" }}>
                <a
                  href={`/artists/${this.props.tracklist.artist.id}`}
                  className="clickable-subheader"
                >
                  <IconText
                    icon="Person"
                    text={this.props.tracklist.artist.name}
                    className="me-4"
                  />
                </a>
                <IconText
                  icon="CalendarEvent"
                  text={this.props.tracklist.datePlayed}
                  className="me-4"
                />
              </h6>
            </div>
            <div>
              <a href={`/tracklists/${this.props.match.params.id}/edit`}>
                <Button variant="outline-secondary me-3" size="sm">
                  <IconText icon="PencilSquare" text="Edit" />
                </Button>
              </a>
              <Button variant="outline-primary" size="sm">
                <IconText icon="Bookmark" text="Bookmark" />
              </Button>
            </div>
          </div>
          <TracklistCompletionBar
            numIdentifiedTracks={this.props.tracklist.numIdentifiedTracks}
            numTotalTracks={this.props.tracklist.numTotalTracks}
            className="mb-3"
          />
          <VideoPlayer
            url={this.props.tracklist.youTubeURL}
            onProgress={this.handleNowPlaying}
          />
          <TrackContainer
            tracks={this.props.tracklist.tracks}
            playedSeconds={this.state.playedSeconds}
          />
        </>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracklist: (id) => dispatch(fetchTracklist(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    tracklist: state.tracklistShowReducer.tracklist,
    loading: state.tracklistShowReducer.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracklistShow);
