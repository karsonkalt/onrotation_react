import { Component } from "react";
import TracklistContainer from "../../containers/TracklistContainer";
import IconText from "../../layout/global/IconText";

class ArtistShow extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

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
        </div>
      </>
    );
  }
}

export default ArtistShow;
