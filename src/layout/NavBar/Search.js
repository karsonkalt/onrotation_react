import { Component } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import "parameterize";

class Search extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  parameterize = (arg) => {
    var parameterize = require("parameterize");
    return parameterize(arg);
  };

  render() {
    return (
      <div style={{ width: "450px", minWidth: "200px" }}>
        <InputGroup size="sm">
          <FormControl
            placeholder="Search"
            style={{ width: "2 rem" }}
            onChange={this.handleInputChange}
          />

          <DropdownButton
            variant="outline-secondary"
            title="Select"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item
              href={`/tracklists?${this.parameterize(this.state.query)}`}
            >
              Tracklists
            </Dropdown.Item>
            <Dropdown.Item
              href={`/tracks?${this.parameterize(this.state.query)}`}
            >
              Tracks
            </Dropdown.Item>
            <Dropdown.Item
              href={`/artists?${this.parameterize(this.state.query)}`}
            >
              Artists
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
