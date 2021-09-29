import { Component } from "react";
import { Button } from "react-bootstrap";
import IconText from "../../layout/global/IconText";

class TrackNew extends Component {
  render() {
    return (
      <>
        <h4>New Track</h4>
        <Button variant="primary" size="sm">
          <IconText icon="PlusCircleFill" text="Add" />
        </Button>
      </>
    );
  }
}

export default TrackNew;
