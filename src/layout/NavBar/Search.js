import { Component } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

class Search extends Component {
  handleClick = () => {
    debugger;
  };

  render() {
    return (
      <div style={{ width: "450px", minWidth: "200px" }}>
        <InputGroup size="sm">
          <FormControl placeholder="Search" style={{ width: "2 rem" }} />

          <DropdownButton
            variant="outline-secondary"
            title="Select"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="/tracklists">Tracklists</Dropdown.Item>
            <Dropdown.Item href="/tracks">Tracks</Dropdown.Item>
            <Dropdown.Item href="/artists">Artists</Dropdown.Item>
            <Dropdown.Item onClick={this.handleClick}>Tester</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
