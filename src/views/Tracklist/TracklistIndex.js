import { Component } from "react";
import { Button } from "react-bootstrap";
import TracklistContainer from "../../containers/TracklistContainer";
import tracklists from "../../data/data";
import IconText from "../../layout/global/IconText";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TracklistIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between">
          <h4 className="mb-3">Tracklist Index {this.search()}</h4>
          {this.props.loggedIn ? (
            <Link to="/tracklists/new">
              <Button variant="primary" size="sm">
                <IconText icon="PlusCircleFill" text="Add New Tracklist" />
              </Button>
            </Link>
          ) : null}
        </div>
        <TracklistContainer tracklists={tracklists} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.sessionReducer.loggedIn,
  };
};

export default connect(mapStateToProps)(TracklistIndex);
