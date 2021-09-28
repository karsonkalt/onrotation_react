import { Button } from "react-bootstrap";
import { Component } from "react";
import IconText from "../../layout/global/IconText";

class TrackIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };
  render() {
    return (
      <>
        <h4>Track Index {this.search()}</h4>
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
