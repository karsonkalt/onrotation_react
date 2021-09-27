import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";
import { Component } from "react";

class UserShow extends Component {
  render() {
    return (
      <>
        <h4>User Show {this.props.match.params.id}</h4>
      </>
    );
  }
}

export default UserShow;
