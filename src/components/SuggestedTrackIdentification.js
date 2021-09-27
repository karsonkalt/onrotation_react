import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import IconText from "../layout/global/IconText";

class SuggestedTrackIdentification extends Component {
  incorrectVoteCount =
    this.props.suggestedTrackIdentificationVotes.voteCount -
    this.props.suggestedTrackIdentificationVotes.voteCountCorrect;

  displayArtist = () => {
    return this.props.suggestedArtist ? (
      <IconText icon="Person" text={this.props.suggestedArtist} />
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
            text={`Suggested Track Identification by ${this.props.identifier}`}
          />
        </span>
        <div
          className="align-items-center justify-content-between "
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex" }}>
            <IconText
              icon="MusicNote"
              text={this.props.suggestedName}
              className="me-3"
            />
            {this.displayArtist()}
          </div>
          <div style={{ display: "flex" }}>
            <div className="flex-column" style={{ display: "flex" }}>
              <Button className="me-3" variant="outline-success" size="sm">
                <IconText icon="CheckCircleFill" text="Correct" />
              </Button>
              <span style={{ fontSize: "10px" }} className="text-success">
                {this.props.suggestedTrackIdentificationVotes.voteCountCorrect}{" "}
                Votes
              </span>
            </div>
            <div className="flex-column" style={{ display: "flex" }}>
              <Button variant="outline-danger" size="sm">
                <IconText icon="XCircleFill" text="Incorrect" />
              </Button>
              <span style={{ fontSize: "10px" }} className="text-danger">
                {this.incorrectVoteCount} Votes
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedTrackIdentification;
