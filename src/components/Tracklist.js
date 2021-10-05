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
              href={`/tracklists/${this.props.tracklist.id}`}
              className="clickable-header"
            >
              <Card.Title>{this.props.tracklist.name}</Card.Title>
            </a>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <a
                href={`/artists/${this.props.tracklist.artist.id}`}
                className="clickable-subheader"
              >
                <IconText
                  icon="Person"
                  text={this.props.tracklist.artist.name}
                  className="me-3"
                />
              </a>
              <IconText
                icon="CalendarEvent"
                text={this.props.tracklist.datePlayed}
                className="me-3"
              />
            </Card.Subtitle>
            <TracklistCompletionBar
              numIdentifiedTracks={this.props.tracklist.numIdentifiedTracks}
              numTotalTracks={this.props.tracklist.numTotalTracks}
            />
          </Card.Body>
          <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
            {/* Change to Days Ago! */}
            added <TimeAgo date={this.props.tracklist.dateCreated} /> by{" "}
            {this.props.tracklist.creator.name}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Tracklist;
