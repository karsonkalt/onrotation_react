import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";

function Home() {
  return (
    <Row>
      <Col />
      <Col m={8} sm={10} style={{ paddingTop: "75px" }}>
        <TracklistContainer />
      </Col>
      <Col />
    </Row>
  );
}

export default Home;
