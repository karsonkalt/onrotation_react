import { Component } from "react";
import IconText from "../../layout/global/IconText";
import TracklistContainer from "../../containers/TracklistContainer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link
                to={`/artists/${this.props.id}`}
                className="clickable-subheader"
              >
                <IconText icon="Person" text="Artist" className="me-4" />
              </Link>
            </h6>
          </div>
          <div>
            <Button variant="outline-secondary" size="sm">
              <IconText icon="PencilSquare" text="Edit" />
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <h5>Played In</h5>
          <TracklistContainer trackId={this.props.match.params.id} />
        </div>
      </>
    );
  }
}

export default TrackShow;
