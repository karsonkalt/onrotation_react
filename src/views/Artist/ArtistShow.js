import { Component } from "react";
import TracklistContainer from "../../containers/TracklistContainer";
import tracklists from "../../data/data";
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
        <TracklistContainer tracklists={tracklists} />
      </>
    );
  }
}

export default ArtistShow;
