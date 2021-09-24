import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";

function Home() {
  return (
    <>
      <h4>Homepage</h4>
      <TracklistContainer />
    </>
  );
}

export default Home;
