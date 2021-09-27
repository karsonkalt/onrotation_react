import { Component } from "react";
import { Card } from "react-bootstrap";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
import IconText from "../layout/global/IconText";
import TimeAgo from "react-timeago";

class Tracklist extends Component {
  render() {
    return (
      <div>
        <Card className="mb-4 shadow-sm">
          {/* <Card.Header>Recently Added</Card.Header> */}
          <Card.Body>
            <a
              href={`/tracklists/${this.props.id}`}
              className="clickable-header"
            >
              <Card.Title>{this.props.name}</Card.Title>
            </a>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <a
                href={`/artists/${this.props.id}`}
                className="clickable-subheader"
              >
                <IconText
                  icon="Person"
                  text={this.props.artist}
                  className="me-3"
                />
              </a>
              <IconText
                icon="CalendarEvent"
                text={this.props.datePlayed}
                className="me-3"
              />
            </Card.Subtitle>
            <TracklistCompletionBar
              numIdentifiedTracks={this.props.numIdentifiedTracks}
              numTotalTracks={this.props.numTotalTracks}
            />
          </Card.Body>
          <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
            {/* Change to Days Ago! */}
            added <TimeAgo date={this.props.dateCreated} /> by{" "}
            {this.props.creator}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Tracklist;
