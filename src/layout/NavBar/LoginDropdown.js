import { Component } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/sessionActions";
import { Person, Key } from "react-bootstrap-icons";

class LoginDropdown extends Component {
  state = {
    emailAddress: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchLogin(this.state);
    // Display error if not valid?
  };

  handleEmailChange = (event) => {
    this.setState({
      ...this.state,
      emailAddress: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  };

  render() {
    return (
      <Form>
        <InputGroup className="mb-2" size="sm">
          <InputGroup.Text>
            <Person />
          </InputGroup.Text>
          <FormControl
            id="inlineFormInputGroup"
            placeholder="email"
            onChange={this.handleEmailChange}
            value={this.state.emailAddress}
          />
          <InputGroup.Text>
            <Key />
          </InputGroup.Text>
          <FormControl
            type="password"
            id="inlineFormInputGroup"
            placeholder="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginDropdown);
