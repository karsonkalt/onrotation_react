import { Component } from "react";
import { Button } from "react-bootstrap";
import TracklistContainer from "../../containers/TracklistContainer";
import tracklists from "../../data/data";
import IconText from "../../layout/global/IconText";

class TracklistIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>Tracklist Index {this.search()}</h4>
        <a href="/tracklists/new">
          <Button variant="primary" size="sm">
            <IconText icon="PlusCircleFill" text="Add" />
          </Button>
        </a>
        <TracklistContainer tracklists={tracklists} />
      </>
    );
  }
}

export default TracklistIndex;
