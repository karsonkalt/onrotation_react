import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import { Component } from "react";
import TracklistContainer from "../containers/TracklistContainer";

class TrackShow extends Component {
  render() {
    debugger;
    return (
      <>
        <h4>Track Show {this.props.match.params.id}</h4>
      </>
    );
  }
}

export default TrackShow;
