import { Component } from "react";
import { Button } from "react-bootstrap";
import IconText from "../../layout/global/IconText";

class TracklistNew extends Component {
  render() {
    return (
      <>
        <h4>New Tracklist</h4>
        <Button variant="primary" size="sm">
          <IconText icon="PlusCircleFill" text="Add" />
        </Button>
      </>
    );
  }
}

export default TracklistNew;
