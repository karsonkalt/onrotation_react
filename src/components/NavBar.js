import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Search from "./Search";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";

function NavBar() {
  return (
    <>
      <Navbar fixed="top" bg="light" className="justify-content-between px-5">
        <div style={{ display: "flex" }}>
          <Navbar.Brand href="#home">OnRotation</Navbar.Brand>

          <Nav className="me-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tracklists">Tracklists</Nav.Link>
            <Nav.Link href="#tracks">Tracks</Nav.Link>
          </Nav>
        </div>

        <Search />

        <Nav className="ms-3">
          <NotificationButton />
          <UserDropdown />
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
