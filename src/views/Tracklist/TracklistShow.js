import { Component } from "react";
import TracklistTrackContainer from "../../containers/TracklistTrackContainer";
import IconText from "../../layout/global/IconText";
import TracklistCompletionBar from "../../components/TracklistCompletionBar";
import VideoPlayer from "../../components/VideoPlayer";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchTracklist } from "../../store/actions/tracklistActions";
import { Link } from "react-router-dom";
import BookmarkButton from "../../layout/global/BookmarkButton";

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
      return (
        <Spinner
          animation="border"
          variant="primary"
          style={{ margin: "0 50%" }}
        />
      );
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
                <Link
                  to={`/artists/${this.props.tracklist.artist.id}`}
                  className="clickable-subheader"
                >
                  <IconText
                    icon="Person"
                    text={this.props.tracklist.artist.name}
                    className="me-4"
                  />
                </Link>
                <IconText
                  icon="CalendarEvent"
                  text={this.props.tracklist.datePlayed}
                  className="me-4"
                />
              </h6>
            </div>
            <div>{this.props.loggedIn ? <BookmarkButton /> : null}</div>
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
          <TracklistTrackContainer
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
    loggedIn: state.sessionReducer.loggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracklistShow);
