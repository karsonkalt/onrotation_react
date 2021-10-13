import TracklistContainer from "../../containers/TracklistContainer";
import IconText from "../../layout/global/IconText";
import TrackContainer from "../../containers/TrackContainer";
import { connect } from "react-redux";

const ArtistShow = (props) => {
  return (
    <>
      <h4>
        {props.name !== null ? (
          <IconText icon="Person" iconPadding="me-2" text={props.name} />
        ) : null}
      </h4>
      <div className="mt-3">
        <h5>Tracklists</h5>
        <TracklistContainer artistId={props.match.params.id} />
        <h5>Tracks</h5>
        <TrackContainer artistId={props.match.params.id} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  if (state.indexReducer.tracks[0]) {
    return {
      name: state.indexReducer.tracks[0].artist.name,
    };
  } else {
    return {
      name: "Loading...",
    };
  }
};

export default connect(mapStateToProps)(ArtistShow);
