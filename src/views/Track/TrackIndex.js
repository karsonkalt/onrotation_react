import { Button } from "react-bootstrap";
import { Component } from "react";
import IconText from "../../layout/global/IconText";

class TrackIndex extends Component {
  render() {
    return (
      <>
        <h4>Track Index</h4>
        <a href="/tracks/new">
          <Button variant="primary" size="sm">
            <IconText icon="PlusCircleFill" text="Add" />
          </Button>
        </a>
      </>
    );
  }
}

export default TrackIndex;
