import { Navbar, Nav } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";
import LoginDropdown from "./LoginDropdown";
import { Link } from "react-router-dom";

import {
  fetchNotifications,
  fetchReadNotification,
} from "../../store/actions/notificationActions";

class NavBar extends Component {
  renderLoginOrUserDropdown = () => {
    return this.props.loggedIn ? (
      <UserDropdown username={this.props.username} />
    ) : (
      <LoginDropdown />
    );
  };

  renderNotificationsIfLoggedIn = () => {
    if (this.props.loggedIn) {
      return (
        <NotificationButton
          notifications={this.props.notifications}
          fetchNotifications={() =>
            this.props.fetchNotifications(this.props.userId)
          }
          fetchReadNotification={this.props.fetchReadNotification}
          userId={this.props.userId}
        />
      );
    }
  };

  render() {
    return (
      <Navbar
        fixed="top"
        bg="white"
        className="justify-content-between px-5 shadow-sm"
      >
        <div style={{ display: "flex" }}>
          <Navbar.Brand as={Link} to="/">
            OnRotation
          </Navbar.Brand>

          <Nav className="me-3">
            <Nav.Link as={Link} to="/tracklists">
              Tracklists
            </Nav.Link>

            <Nav.Link as={Link} to="/tracks">
              Tracks
            </Nav.Link>
          </Nav>
        </div>

        <Nav className="ms-3">
          {this.renderNotificationsIfLoggedIn()}
          {this.renderLoginOrUserDropdown()}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.sessionReducer.loggedIn,
    username: state.sessionReducer.username,
    userId: state.sessionReducer.userId,
    notifications: state.notificationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: (id) => dispatch(fetchNotifications(id)),
    fetchReadNotification: (data, userId) =>
      dispatch(fetchReadNotification(data, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
