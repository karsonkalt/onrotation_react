import { NavDropdown } from "react-bootstrap";

function UserDropdown(props) {
  return (
    <NavDropdown title={props.username} className="d-flex flex-row-reverse">
      <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
      <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
      <NavDropdown.Item>Logout</NavDropdown.Item>
    </NavDropdown>
  );
}

export default UserDropdown;
