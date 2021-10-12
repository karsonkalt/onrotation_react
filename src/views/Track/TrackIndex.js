import { Button } from "react-bootstrap";
import { Component } from "react";
import IconText from "../../layout/global/IconText";
import TrackContainer from "../../containers/TrackContainer";
import { Link } from "react-router-dom";

class TrackIndex extends Component {
  render() {
    return (
      <>
        <h4>Track Index</h4>
        <TrackContainer />
      </>
    );
  }
}

export default TrackIndex;
