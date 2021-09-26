import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import IconText from "../layout/global/IconText";

class Track extends Component {
  // daysAgo = () => {
  //   const timeAgo = new TimeAgo("en-US");
  //   return timeAgo.format(new Date() - Date.parse(this.props.dateCreated));
  // };

  displayName = () => {
    return this.props.name ? this.props.name : "ID";
  };

  displayArtist = () => {
    return this.props.artist ? this.props.artist : "Unknown Artist";
  };

  displayLabel = () => {
    return this.props.label ? this.props.label : "Unreleased";
  };

  idButton = () => {
    return this.props.name == null ? (
      <Button className="me-3" variant="outline-secondary" size="sm">
        ID
      </Button>
    ) : null;
  };

  bookmarkButton = () => {
    return this.props.name == null ? (
      <Button
        onClick={this.handleBookmarkClick}
        className="me-3"
        variant="outline-primary"
        size="sm"
      >
        <IconText icon="Bookmark" text="Bookmark" />
      </Button>
    ) : null;
  };

  handleBookmarkClick = () => {
    debugger;
  };

  handleIdClick = () => {
    debugger;
  };

  render() {
    return (
      <Card className={"mb-4 shadow-sm"}>
        <div className="align-items-center" style={{ display: "flex" }}>
          <div
            className="m-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h4>{this.props.order}</h4>
            <h6>{this.props.cueTime}</h6>
          </div>
          <Card.Body>
            <a href={`/tracks/${this.props.id}`}>
              <Card.Title>{this.displayName()}</Card.Title>
            </a>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <IconText
                icon="Person"
                text={this.displayArtist()}
                className="me-3"
              />
              <IconText
                icon="Vinyl"
                text={this.displayLabel()}
                className="me-3"
              />
            </Card.Subtitle>
          </Card.Body>
          <div>
            {this.idButton()}
            {this.bookmarkButton()}
          </div>
        </div>
        <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
          {/* Change to Days Ago! */}
          ID'd by {this.props.identifier}
        </Card.Footer>
      </Card>
    );
  }
}

export default Track;
