import { Navbar, Nav } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";
import LoginDropdown from "./LoginDropdown";

import notificationData from "../../data/notificationData";

class NavBar extends Component {
  renderLoginOrUserDropdown = () => {
    return this.props.loggedIn ? <UserDropdown /> : <LoginDropdown />;
  };

  render() {
    return (
      <Navbar
        fixed="top"
        bg="white"
        className="justify-content-between px-5 shadow-sm"
      >
        <div style={{ display: "flex" }}>
          <Navbar.Brand href="/">OnRotation</Navbar.Brand>

          <Nav className="me-3">
            <Nav.Link href="/tracklists">Tracklists</Nav.Link>
            <Nav.Link href="/tracks">Tracks</Nav.Link>
          </Nav>
        </div>

        <Search />

        <Nav className="ms-3">
          <NotificationButton notifications={notificationData} />
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
  };
};

export default connect(mapStateToProps)(NavBar);
