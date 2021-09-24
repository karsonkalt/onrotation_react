import { Component } from "react";
import { ProgressBar, Badge } from "react-bootstrap";

class TracklistCompletionBar extends Component {
  percentage = this.props.numIdentifiedTracks / this.props.numTotalTracks;

  selectStyle = (percentage) => {
    switch (true) {
      case percentage === 1:
        return "success";

      case percentage <= 0.5:
        return "danger";

      default:
        return "warning";
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }} className="align-items-center">
        <ProgressBar
          now={this.percentage * 100}
          style={{ height: ".25rem", width: "100%" }}
          variant={this.selectStyle(this.percentage)}
          className="me-3"
        />
        <div style={{ display: "flex" }}>
          <Badge bg="light" text="secondary">
            {this.props.numIdentifiedTracks}/{this.props.numTotalTracks} Tracks
            ID'd
          </Badge>
        </div>
      </div>
    );
  }
}

export default TracklistCompletionBar;
