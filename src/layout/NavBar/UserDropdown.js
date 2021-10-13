import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../store/actions/sessionActions";

function UserDropdown(props) {
  return (
    <NavDropdown title={props.username} className="d-flex flex-row-reverse">
      <NavDropdown.Item onClick={props.logout}>Logout</NavDropdown.Item>
    </NavDropdown>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(UserDropdown);
