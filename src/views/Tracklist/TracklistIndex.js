import { Button } from "react-bootstrap";
import TracklistContainer from "../../containers/TracklistContainer";
import IconText from "../../layout/global/IconText";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TracklistIndex = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="mb-3">Tracklists</h4>
        {props.loggedIn ? (
          <Link to="/tracklists/new">
            <Button variant="primary" size="sm">
              <IconText icon="PlusCircleFill" text="Add New Tracklist" />
            </Button>
          </Link>
        ) : null}
      </div>
      <TracklistContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.sessionReducer.loggedIn,
  };
};

export default connect(mapStateToProps)(TracklistIndex);
