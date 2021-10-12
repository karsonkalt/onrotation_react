import { Card, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconText from "../layout/global/IconText";

import guy_j_img from "../img/guy_j.jpeg";
import khen_img from "../img/khen.jpeg";
import umf_img from "../img/umf_radio.png";

function Home() {
  return (
    <>
      <Alert variant="primary" className="mb-4 p-4">
        <Alert.Heading>
          Follow tracklists and tracks of your favorite DJ's
        </Alert.Heading>
        <p>
          With OnRotation, you can track, identify, and bookmark tracks being
          played by your favorite DJs. Easily collaborate with other users, vote
          for correct track identifications, and add tracklists in real time.
        </p>
      </Alert>
      <h4>Featured Artists</h4>
      <Row>
        <Col>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              style={{ height: "150px", objectFit: "cover" }}
              src={guy_j_img}
            />
            <Card.Body className="p-4">
              <Card.Title>
                <IconText icon="Person" text="Guy J" className="me-3" />
              </Card.Title>
              <Card.Text>
                Israeli producer Guy J has established himself as one of the
                most sophisticated and emotive producers in electronic music of
                the last decade, with a body of work and a sphere of influence
                that belies relatively short time in the spotlight.
              </Card.Text>
              <Link to="/artists/1">
                <Button variant="outline-primary" size="sm">
                  <IconText icon="Person" text="Artist Page" />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              style={{ height: "150px", objectFit: "cover" }}
              src={khen_img}
            />
            <Card.Body className="p-4">
              <Card.Title>
                {" "}
                <IconText icon="Person" text="Khen" className="me-3" />
              </Card.Title>
              <Card.Text>
                The jury is in and the likes of John Digweed, Sasha, industry
                media and an exponentially growing fan base across the globe are
                in agreement; all signs point to who the next big thing to come
                out of the dance music hot bed that is Israel will be.
              </Card.Text>
              <Link to="/artists/17">
                <Button variant="outline-primary" size="sm">
                  <IconText icon="Person" text="Artist Page" />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h4>Featured Tracklist</h4>
      <Card className="mb-5 shadow-sm">
        <Card.Img
          variant="top"
          style={{ height: "150px", objectFit: "cover" }}
          src={umf_img}
        />
        <Card.Body className="p-4">
          <Card.Title>
            <IconText
              icon="MusicNoteList"
              text="Live at UMF Radio"
              className="me-3"
            />
          </Card.Title>
          <Card.Text>
            Watch Guy J on John Digweed's Transitions radio show. Broadcast
            across 45 countries to a staggering audience of 14 million.
          </Card.Text>
          <Link to="/=tracklists/1">
            <Button variant="outline-primary" size="sm">
              <IconText icon="MusicNoteList" text="Tracklist Page" />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
