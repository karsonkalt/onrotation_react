import { Component } from "react";
import IconText from "../../layout/global/IconText";
import TracklistContainer from "../../containers/TracklistContainer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTrack } from "../../store/actions/tracklistActions";

class TrackShow extends Component {
  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-between ">
          <div>
            <h4>
              <IconText
                icon="MusicNote"
                iconPadding="me-2"
                text={this.props.name}
              />
            </h4>
            <h6 className="mb-2 text-muted" style={{ display: "flex" }}>
              <Link
                to={`/artists/${this.props.artistId}`}
                className="clickable-subheader"
              >
                <IconText
                  icon="Person"
                  text={this.props.artistName}
                  className="me-4"
                />
              </Link>
            </h6>
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

const mapStateToProps = (state) => {
  if (state.indexReducer.tracks[0]) {
    return {
      name: state.indexReducer.tracks[0].name,
      artistName: state.indexReducer.tracks[0].artist.name,
      artistId: state.indexReducer.tracks[0].artist.id,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return { fetchTrack: (id) => dispatch(fetchTrack(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
