import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "./Tracklist";
import TracklistContainer from "../containers/TracklistContainer";

function Home() {
  return (
    <Row>
      <Col />
      <Col
        m={8}
        sm={10}
        style={{ paddingTop: "75px", border: "1px solid rgba(0,0,0,.125)" }}
      >
        <TracklistContainer />
      </Col>
      <Col />
    </Row>
  );
}

export default Home;
