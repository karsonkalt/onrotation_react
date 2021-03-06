import { Component } from "react";
import { Button } from "react-bootstrap";
import IconText from "../layout/global/IconText";

class SuggestedTrackIdentification extends Component {
  incorrectVoteCount = () => {
    return this.props.suggestedTrackIdentificationVotes.filter(
      (vote) => vote.is_identification_correct === false
    ).length;
  };

  correctVoteCount = () => {
    return this.props.suggestedTrackIdentificationVotes.filter(
      (vote) => vote.is_identification_correct === true
    ).length;
  };

  displayArtist = () => {
    return this.props.suggestedArtist ? (
      <IconText icon="Person" text={this.props.suggestedArtist.name} />
    ) : null;
  };

  render() {
    return (
      <div
        className="ms-3 me-3 mb-3 p-3 bg-warning border rounded border-warning "
        style={{ "--bs-bg-opacity": 0.1, color: "#c7941c" }}
      >
        <span style={{ fontSize: "12px" }}>
          <IconText
            icon="Lightbulb"
            text={`Suggested Track Identification by ${this.props.identifier.username}`}
          />
        </span>
        <div
          className="align-items-center justify-content-between "
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex" }}>
            <IconText
              icon="MusicNote"
              text={`${this.props.suggestedName}`}
              className="me-3"
            />

            {this.displayArtist()}
          </div>
          <div style={{ display: "flex" }}>
            <div className="flex-column" style={{ display: "flex" }}>
              <Button className="me-3" variant="success" size="sm">
                <IconText icon="CheckCircleFill" text="Correct" />
              </Button>
              <span style={{ fontSize: "10px" }} className="text-success">
                {this.correctVoteCount()} Votes
              </span>
            </div>
            <div className="flex-column" style={{ display: "flex" }}>
              <Button variant="danger" size="sm">
                <IconText icon="XCircleFill" text="Incorrect" />
              </Button>
              <span style={{ fontSize: "10px" }} className="text-danger">
                {this.incorrectVoteCount()} Votes
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedTrackIdentification;
