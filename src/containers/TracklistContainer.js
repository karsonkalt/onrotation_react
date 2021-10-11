import { Component } from "react";
import { connect } from "react-redux";
import {
  fetchTracklists,
  fetchTrackTracklists,
  fetchArtistTracklists,
} from "../store/actions/tracklistActions";
import { Spinner } from "react-bootstrap";

import Tracklist from "../components/Tracklist";

class TracklistContainer extends Component {
  componentDidMount() {
    if (this.props.trackId) {
      this.props.fetchTrackTracklists(this.props.trackId);
    } else if (this.props.artistId) {
      this.props.fetchArtistTracklists(this.props.artistId);
    } else {
      this.props.fetchTracklists();
    }
  }

  renderTracklists = () => {
    return this.props.tracklists.map((tracklist) => {
      return <Tracklist tracklist={tracklist} />;
    });
  };

  render() {
    if (this.props.loading) {
      return (
        <Spinner
          animation="border"
          variant="primary"
          style={{ margin: "0 50%" }}
        />
      );
    } else {
      return this.renderTracklists();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tracklists: state.indexReducer.tracklists,
    loading: state.indexReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracklists: () => dispatch(fetchTracklists()),
    fetchTrackTracklists: (id) => dispatch(fetchTrackTracklists(id)),
    fetchArtistTracklists: (id) => dispatch(fetchArtistTracklists(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracklistContainer);
