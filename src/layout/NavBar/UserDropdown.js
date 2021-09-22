import { NavDropdown } from "react-bootstrap";

function UserDropdown() {
  return (
    <NavDropdown title="Username" className="d-flex flex-row-reverse">
      <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
      <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
    </NavDropdown>
  );
}

export default UserDropdown;
