import { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

class TracklistContainer extends Component {
  renderTracklists = () => {
    return [
      "Guy J Live at Echos",
      "Navar at This Place",
      "Someone else at this place",
      "Guy Mantzur Live at Echos 002",
    ].map((item, index) => {
      return (
        <Card key={index} className="mb-3">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{item}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return <Container>{this.renderTracklists()}</Container>;
  }
}

export default TracklistContainer;
