import { Component } from "react";
import Track from "../components/Track";
import { connect } from "react-redux";
import {
  fetchArtistTracks,
  fetchTracks,
} from "../store/actions/tracklistActions";

class TrackContainer extends Component {
  componentDidMount() {
    if (this.props.artistId) {
      this.props.fetchArtistTracks(this.props.artistId);
    } else {
      this.props.fetchTracks();
    }
  }

  renderTracks = () => {
    return this.props.tracks.map(
      ({ name, artist, label, id, identifiedDate }) => {
        return (
          <Track
            name={name}
            artist={artist}
            label={label}
            id={id}
            identifiedDate={identifiedDate}
            key={id}
          />
        );
      }
    );
  };

  render() {
    return this.renderTracks();
  }
}

const mapStateToProps = (state) => {
  return { tracks: state.indexReducer.tracks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistTracks: (id) => dispatch(fetchArtistTracks(id)),
    fetchTracks: () => dispatch(fetchTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackContainer);
