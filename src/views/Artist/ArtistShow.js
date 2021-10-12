import { Component } from "react";
import TracklistContainer from "../../containers/TracklistContainer";
import IconText from "../../layout/global/IconText";
import TrackContainer from "../../containers/TrackContainer";
import { connect } from "react-redux";

class ArtistShow extends Component {
  render() {
    return (
      <>
        <h4>
          {this.props.name !== null ? (
            <IconText icon="Person" iconPadding="me-2" text={this.props.name} />
          ) : null}
        </h4>
        <div className="mt-3">
          <h5>Tracklists</h5>
          <TracklistContainer artistId={this.props.match.params.id} />
          <h5>Tracks</h5>
          <TrackContainer artistId={this.props.match.params.id} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.indexReducer.tracks[0]) {
    return {
      name: state.indexReducer.tracks[0].artist.name,
    };
  } else {
    return {
      name: "Loading...",
    };
  }
};

export default connect(mapStateToProps)(ArtistShow);
