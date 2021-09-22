import { Component } from "react";
import { Card, Row, Col, Container, ProgressBar, Badge } from "react-bootstrap";
import {
  PersonFill,
  CalendarFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

class TracklistContainer extends Component {
  renderTracklists = () => {
    return [
      "Guy J Live at Echos",
      "Navar at This Place",
      "Someone else at this place",
      "Guy Mantzur Live at Echos 002",
    ].map((item, index) => {
      return (
        <Card key={index} className="mb-4 shadow-sm">
          {/* <Card.Header>Recently Added</Card.Header> */}
          <Card.Body>
            <Card.Title>{item}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <Row>
                <Col>
                  <PersonFill className="ml-2" />
                  Guy J
                </Col>
                <Col>
                  <CalendarFill className="ml-2" />
                  January 15, 2018
                </Col>
              </Row>
            </Card.Subtitle>
            <ProgressBar
              now={60}
              style={{ height: ".25rem" }}
              variant="warning"
            />
            <CheckCircleFill fill="#ffc107" className="mr-2" />
            <Badge bg="warning">6/12 Tracks ID'd</Badge>
          </Card.Body>
          <Card.Footer className="text-muted fs-6">
            added 2 days ago by username
          </Card.Footer>
        </Card>
      );
    });
  };

  render() {
    return <Container>{this.renderTracklists()}</Container>;
  }
}

export default TracklistContainer;
