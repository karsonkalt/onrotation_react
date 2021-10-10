import { Component } from "react";
import TracklistContainer from "../../containers/TracklistContainer";
import IconText from "../../layout/global/IconText";
import TrackContainer from "../../containers/TrackContainer";

class ArtistShow extends Component {
  render() {
    return (
      <>
        <h4>
          <IconText
            icon="Person"
            iconPadding="me-2"
            text={`Artist Show ${this.props.match.params.id}`}
          />
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

export default ArtistShow;
