import { Component } from "react";
import TrackContainer from "../containers/TrackContainer";
import tracks from "../trackData";
import IconText from "../layout/global/IconText";
import TracklistCompletionBar from "../components/TracklistCompletionBar";
import { Button } from "react-bootstrap";

class TrackShow extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between ">
          <div>
            <h4>
              <IconText
                icon="MusicNote"
                iconPadding="me-2"
                text={`Track Show ${this.props.match.params.id}`}
              />
            </h4>
            <h6 className="mb-2 text-muted" style={{ display: "flex" }}>
              <a
                href={`/artists/${this.props.id}`}
                className="clickable-subheader"
              >
                <IconText icon="Person" text="Artist" className="me-4" />
              </a>
            </h6>
          </div>
          <div>
            <Button variant="outline-secondary" size="sm">
              <IconText icon="PencilSquare" text="Edit" />
            </Button>
          </div>
        </div>
        <div>List all tracklists here</div>
      </>
    );
  }
}

export default TrackShow;
