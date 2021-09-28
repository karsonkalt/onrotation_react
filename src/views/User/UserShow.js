import { Component } from "react";
import IconText from "../../layout/global/IconText";

class UserShow extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>
          <IconText
            icon="PersonSquare"
            iconPadding="me-2"
            text={`User Show ${this.props.match.params.id}`}
          />
        </h4>
      </>
    );
  }
}

export default UserShow;
