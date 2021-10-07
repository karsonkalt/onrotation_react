import { Component } from "react";
import { connect } from "react-redux";
import { fetchTracklists } from "../store/actions/tracklistActions";

import Tracklist from "../components/Tracklist";

class TracklistContainer extends Component {
  componentDidMount() {
    this.props.fetchTracklists();
  }

  renderTracklists = () => {
    return this.props.tracklists.map((tracklist) => {
      return <Tracklist tracklist={tracklist} />;
    });
  };

  render() {
    return this.renderTracklists();
  }
}

const mapStateToProps = (state) => {
  return {
    tracklists: state.tracklistIndexReducer.tracklists,
    loading: state.tracklistIndexReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracklists: () => dispatch(fetchTracklists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracklistContainer);
