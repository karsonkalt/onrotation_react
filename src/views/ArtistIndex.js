import { Component } from "react";
import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";

class ArtistIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>Artist Index {this.search()}</h4>
      </>
    );
  }
}

export default ArtistIndex;
