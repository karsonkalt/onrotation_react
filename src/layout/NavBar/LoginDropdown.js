import { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/sessionActions";

class LoginDropdown extends Component {
  state = {
    username: "karson",
    password: "password!",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchLogin(this.state);
  };

  render() {
    return (
      <NavDropdown title="Login" className="d-flex flex-row-reverse">
        <NavDropdown.Item onClick={this.handleSubmit}>Submit</NavDropdown.Item>
      </NavDropdown>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginDropdown);
