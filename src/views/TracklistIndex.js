import { Component } from "react";
import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";
import tracklists from "../data";

class TracklistIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>Tracklist Index {this.search()}</h4>
        <TracklistContainer tracklists={tracklists} />
      </>
    );
  }
}

export default TracklistIndex;
