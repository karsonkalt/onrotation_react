import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import { Component } from "react";
import TracklistContainer from "../containers/TracklistContainer";

class TrackIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>Track Index {this.search()}</h4>
      </>
    );
  }
}

export default TrackIndex;
