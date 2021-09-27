import { Component } from "react";
import { ProgressBar, Badge } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

class TracklistCompletionBar extends Component {
  percentage = this.props.numIdentifiedTracks / this.props.numTotalTracks;

  selectStyle = (percentage) => {
    switch (true) {
      case percentage === 1:
        return "success";

      case percentage <= 0.5:
        return "danger";

      default:
        return "secondary";
    }
  };

  renderCheck = (percentage) => {
    return percentage === 1 ? (
      <CheckCircleFill color="#198754" className="me-3" />
    ) : null;
  };

  render() {
    return (
      <div
        style={{ display: "flex" }}
        className={`align-items-center ${this.props.className}`}
      >
        <ProgressBar
          now={this.percentage * 100}
          style={{ height: ".25rem", width: "100%" }}
          variant={this.selectStyle(this.percentage)}
          className="me-3"
        />
        <div style={{ display: "flex" }}>
          {this.renderCheck(this.percentage)}
          <Badge bg="light" text="secondary">
            {this.props.numIdentifiedTracks}/{this.props.numTotalTracks} Tracks
            identified
          </Badge>
        </div>
      </div>
    );
  }
}

export default TracklistCompletionBar;
