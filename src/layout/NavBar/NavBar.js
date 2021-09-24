import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";

function NavBar() {
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
        <NotificationButton />
        <UserDropdown />
      </Nav>
    </Navbar>
  );
}

export default NavBar;