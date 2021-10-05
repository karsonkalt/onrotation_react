import { Component } from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";

import Tracklist from "../components/Tracklist";

class TracklistContainer extends Component {
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
    return this.renderTracklists();
  }
}

const mapStateToProps = (state) => {
  return {
    tracklists: state.tracklists,
    loading: state.loading,
  };
};

export default connect()(TracklistContainer);
