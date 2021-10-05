import { Component } from "react";
import { connect } from "react-redux";
import { fetchTracklists } from "../store/actions/tracklistActions";

import Tracklist from "../components/Tracklist";

class TracklistContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchTracklists();
  // }

  renderTracklists = () => {
    return this.props.tracklists.map(
      ({
        name,
        artist,
        datePlayed,
        creator,
        dateCreated,
        numIdentifiedTracks,
        numTotalTracks,
        id,
      }) => {
        return (
          <Tracklist
            name={name}
            artist={artist}
            datePlayed={datePlayed}
            creator={creator}
            dateCreated={dateCreated}
            numIdentifiedTracks={numIdentifiedTracks}
            numTotalTracks={numTotalTracks}
            id={id}
          />
        );
      }
    );
  };

  render() {
    return <li>test</li>;
  }
}

const mapStateToProps = (state) => {
  return {
    tracklists: state.tracklists,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracklists: () => dispatch(fetchTracklists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracklistContainer);
