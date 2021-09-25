import { Component } from "react";
import { Card } from "react-bootstrap";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
import IconText from "../layout/global/IconText";

class Tracklist extends Component {
  // daysAgo = () => {
  //   const timeAgo = new TimeAgo("en-US");
  //   return timeAgo.format(new Date() - Date.parse(this.props.dateCreated));
  // };

  render() {
    return (
      <Card className="mb-4 shadow-sm">
        {/* <Card.Header>Recently Added</Card.Header> */}
        <Card.Body>
          <a href={`/tracklists/${this.props.id}`}>
            <Card.Title>{this.props.name}</Card.Title>
          </a>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ display: "flex" }}
          >
            <IconText icon="Person" text={this.props.artist} />
            <IconText icon="CalendarEvent" text={this.props.datePlayed} />
          </Card.Subtitle>
          <TracklistCompletionBar
            numIdentifiedTracks={this.props.numIdentifiedTracks}
            numTotalTracks={this.props.numTotalTracks}
          />
        </Card.Body>
        <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
          {/* Change to Days Ago! */}
          added {this.props.dateCreated} by {this.props.creator}
        </Card.Footer>
      </Card>
    );
  }
}

export default Tracklist;
