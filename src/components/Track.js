import { Component } from "react";
import { Card, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import IconText from "../layout/global/IconText";
import SuggestedTrackIdentification from "./SuggestedTrackIdentification";
import CreateSuggestedTrackIdentificationForm from "./CreateSuggestedTrackIdentificationForm";
import TimeAgo from "react-timeago";

class Track extends Component {
  // daysAgo = () => {
  //   const timeAgo = new TimeAgo("en-US");
  //   return timeAgo.format(new Date() - Date.parse(this.props.dateCreated));
  // };

  state = {
    showForm: false,
    bookmarked: false,
  };

  displayName = () => {
    return this.props.name ? (
      <a href={`/tracks/${this.props.id}`} className="clickable-header">
        <Card.Title>
          <IconText icon="MusicNote" text={this.props.name} className="me-3" />
        </Card.Title>
      </a>
    ) : (
      <Card.Title>
        <IconText
          icon="MusicNote"
          text={<span className="missing-info me-3">Unknown Track</span>}
          className="me-3"
        />
      </Card.Title>
    );
  };

  displayArtist = () => {
    return this.props.artist ? (
      <a href={`/artists/${this.props.id}`} className="clickable-subheader">
        <IconText icon="Person" text={this.props.artist} className="me-3" />
      </a>
    ) : (
      <IconText
        icon="Person"
        text={<span className="missing-info">Unknown Artist</span>}
        className="me-3"
      />
    );
  };

  displayLabel = () => {
    return this.props.label ? (
      <a href={`/labels/${this.props.id}`} className="clickable-subheader">
        <IconText icon="Vinyl" text={this.props.label} className="me-3" />
      </a>
    ) : (
      <IconText
        icon="Vinyl"
        text={<span className="missing-info">Unreleased</span>}
        className="me-3"
      />
    );
  };

  idButton = () => {
    if (this.props.suggestedTrackIdentification) {
      return (
        <OverlayTrigger
          key="left"
          placement="left"
          overlay={
            <Tooltip id="tooltip-left">
              Suggested track identification must be resolved before suggesting
              new identification.
            </Tooltip>
          }
        >
          <span>
            <Button
              className="me-3"
              variant="outline-secondary"
              size="sm"
              disabled
            >
              <IconText icon="LightbulbOff" text="Identify" />
            </Button>
          </span>
        </OverlayTrigger>
      );
    } else if (this.props.name == null) {
      return (
        <Button
          className="me-3"
          variant="outline-secondary"
          size="sm"
          onClick={this.handleIdentifyClick}
        >
          <IconText icon="Lightbulb" text="Identify" />
        </Button>
      );
    }
  };

  suggestedTrackIdentification = () => {
    return this.props.suggestedTrackIdentification ? (
      <SuggestedTrackIdentification
        {...this.props.suggestedTrackIdentification}
      />
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

  identificationFooter = () => {
    return this.props.identifier ? (
      <Card.Footer className="text-muted" style={{ fontSize: "10px" }}>
        {/* Change to Days Ago! */}
        identified <TimeAgo date={this.props.identifiedDate} /> by{" "}
        <a
          href={`/users/${this.props.identifier.id}`}
          className="clickable-subheader"
        >
          {this.props.identifier.name}
        </a>
      </Card.Footer>
    ) : null;
  };

  handleBookmarkClick = () => {
    debugger;
  };

  handleIdentifyClick = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  showCreateSuggestedTrackIdentificationForm = () => {
    return this.state.showForm ? (
      <CreateSuggestedTrackIdentificationForm />
    ) : null;
  };

  render() {
    return (
      <Card className={"mb-4 shadow-sm"}>
        <div className="d-flex align-items-center ">
          <div
            className="m-3 mt-0 me-0 d-flex align-items-start "
            style={{ flexDirection: "column", width: "50px" }}
          >
            <h4 className="mb-0">{this.props.order}</h4>
            <span style={{ fontSize: "12px", color: "grey" }}>
              {this.props.cueTime}
            </span>
          </div>
          <Card.Body>
            {this.displayName()}
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              {this.displayArtist()}
              {this.displayLabel()}
            </Card.Subtitle>
          </Card.Body>
          <div>
            {this.idButton()}
            {this.bookmarkButton()}
          </div>
        </div>
        {this.suggestedTrackIdentification()}
        {this.showCreateSuggestedTrackIdentificationForm()}
        {this.identificationFooter()}
      </Card>
    );
  }
}

export default Track;
