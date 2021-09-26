import { Component } from "react";
import {
  Person,
  CalendarEvent,
  Bookmark,
  Vinyl,
  MusicNote,
  MusicNoteList,
} from "react-bootstrap-icons";

class IconText extends Component {
  selectIcon = (icon) => {
    switch (icon) {
      case "CalendarEvent":
        return <CalendarEvent className={`me-1 ${this.props.iconPadding}`} />;

      case "Vinyl":
        return <Vinyl className={`me-1 ${this.props.iconPadding}`} />;

      case "MusicNote":
        return <MusicNote className={`me-1 ${this.props.iconPadding}`} />;

      case "MusicNoteList":
        return <MusicNoteList className={`me-1 ${this.props.iconPadding}`} />;

      case "Person":
        return <Person className={`me-1 ${this.props.iconPadding}`} />;

      case "Bookmark":
        return <Bookmark className={`me-1 ${this.props.iconPadding}`} />;

      default:
        return null;
    }
  };

  render() {
    return (
      <div
        className={`align-items-center ${this.props.className}`}
        style={{ display: "flex" }}
      >
        {this.selectIcon(this.props.icon)}
        {this.props.text}
      </div>
    );
  }
}

export default IconText;
