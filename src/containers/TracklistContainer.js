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
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <div className="me-3">
                <PersonFill className="me-1" />
                Guy J
              </div>
              <div className="me-3">
                <CalendarFill className="me-1" />
                January 15, 2018
              </div>
            </Card.Subtitle>
            <div style={{ display: "flex" }} className="align-items-center">
              <ProgressBar
                now={60}
                style={{ height: ".25rem", width: "100%" }}
                variant="warning"
                className="me-3"
              />
              <div style={{ display: "flex" }}>
                <CheckCircleFill fill="#ffc107" className="me-3" />
                <Badge bg="secondary">6/12 Tracks ID'd</Badge>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
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
