import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "./Tracklist";
import TracklistContainer from "../containers/TracklistContainer";

function Home() {
  return (
    <Row>
      <Col />
      <Col m={8} sm={10}>
        <TracklistContainer />
      </Col>
      <Col />
    </Row>
  );
}

export default Home;
