import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconText from "../layout/global/IconText";

class Track extends Component {
  displayLabel = () => {
    return this.props.label.name ? (
      <IconText icon="Vinyl" text={this.props.label.name} className="me-3" />
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
            <Link
              to={`/tracks/${this.props.id}`}
              className={`clickable-header`}
            >
              <Card.Title>
                <IconText
                  icon="MusicNote"
                  text={this.props.name}
                  className="me-3"
                />
              </Card.Title>
            </Link>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ display: "flex" }}
            >
              <Link
                to={`/artists/${this.props.artist.id}`}
                className="clickable-subheader"
              >
                <IconText
                  icon="Person"
                  text={this.props.artist.name}
                  className="me-3"
                />
              </Link>
              {this.displayLabel()}
            </Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    );
  }
}

export default Track;
