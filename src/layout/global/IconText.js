import { Component } from "react";
import { Person, CalendarEvent, Bookmark } from "react-bootstrap-icons";

class IconText extends Component {
  selectIcon = (icon) => {
    switch (icon) {
      case "CalendarEvent":
        return <CalendarEvent className="me-1" />;

      case "Person":
        return <Person className="me-1" />;

      case "Bookmark":
        return <Bookmark className="me-1" />;

      default:
        return null;
    }
  };

  render() {
    return (
      <div className="align-items-center" style={{ display: "flex" }}>
        {this.selectIcon(this.props.icon)}
        {this.props.text}
      </div>
    );
  }
}

export default IconText;
