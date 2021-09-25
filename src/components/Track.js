import { Component } from "react";
import { Card } from "react-bootstrap";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
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
    return this.props.artist ? this.props.artist : "ID";
  };

  displayLabel = () => {
    return this.props.label ? this.props.label : "Unreleased";
  };

  render() {
    return (
      <Card className="mb-4 shadow-sm">
        <div style={{ display: "flex" }}>
          <h4 className="m-4">{this.props.order}</h4>
          <Card.Body>
            <a href={`/tracks/${this.props.id}`}>
              <Card.Title>{this.displayName()}</Card.Title>
            </a>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <IconText icon="Person" text={this.displayArtist()} />
              <IconText icon="Person" text={this.displayLabel()} />
            </Card.Subtitle>
          </Card.Body>
        </div>
        <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
          {/* Change to Days Ago! */}
          id'd by {this.props.identifier}
        </Card.Footer>
      </Card>
    );
  }
}

export default Track;
