import { Component } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import IconText from "../layout/global/IconText";

class Track extends Component {
  displayLabel = () => {
    return this.props.label.name ? (
      <a
        href={`/labels/${this.props.label.id}`}
        className="clickable-subheader"
      >
        <IconText icon="Vinyl" text={this.props.label.name} className="me-3" />
      </a>
    ) : (
      <IconText
        icon="Vinyl"
        text={<span className="missing-info">Unreleased</span>}
        className="me-3"
      />
    );
  };

  render() {
    return (
      <Card className={`mb-4 playable`}>
        <div className={`d-flex align-items-center`}>
          <Card.Body>
            <a href={`/tracks/${this.props.id}`} className={`clickable-header`}>
              <Card.Title>
                <IconText
                  icon="MusicNote"
                  text={this.props.name}
                  className="me-3"
                />
              </Card.Title>
            </a>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <a
                href={`/artists/${this.props.artist.id}`}
                className="clickable-subheader"
              >
                <IconText
                  icon="Person"
                  text={this.props.artist.name}
                  className="me-3"
                />
              </a>
              {this.displayLabel()}
            </Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    );
  }
}

export default Track;
