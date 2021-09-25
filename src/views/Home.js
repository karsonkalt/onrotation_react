import { Container, Button, Col, Alert, Row } from "react-bootstrap";
import Tracklist from "../components/Tracklist";
import TracklistContainer from "../containers/TracklistContainer";
import tracklists from "../data";

function Home() {
  return (
    <>
      <h4>Homepage</h4>
      <TracklistContainer tracklists={tracklists} />
    </>
  );
}

export default Home;
