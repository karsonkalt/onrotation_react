import { Component } from "react";
import {
  Person,
  CalendarEvent,
  Bookmark,
  BookmarkFill,
  Vinyl,
  MusicNote,
  MusicNoteList,
  Lightbulb,
  CheckCircleFill,
  Check,
  XCircleFill,
  PencilSquare,
  Bell,
  LightbulbOff,
  Clock,
  PlayFill,
  PersonSquare,
  PlusCircleFill,
} from "react-bootstrap-icons";

class IconText extends Component {
  selectIcon = (icon) => {
    switch (icon) {
      case "CalendarEvent":
        return <CalendarEvent className={`me-1 ${this.props.iconPadding}`} />;

      case "PencilSquare":
        return <PencilSquare className={`me-1 ${this.props.iconPadding}`} />;

      case "PersonSquare":
        return <PersonSquare className={`me-1 ${this.props.iconPadding}`} />;

      case "PlusCircleFill":
        return <PlusCircleFill className={`me-1 ${this.props.iconPadding}`} />;

      case "Bell":
        return <Bell className={`me-1 ${this.props.iconPadding}`} />;

      case "Clock":
        return <Clock className={`me-1 ${this.props.iconPadding}`} />;

      case "CheckCircleFill":
        return <CheckCircleFill className={`me-1 ${this.props.iconPadding}`} />;

      case "Check":
        return <Check className={`me-1 ${this.props.iconPadding}`} />;

      case "PlayFill":
        return <PlayFill className={`me-1 ${this.props.iconPadding}`} />;

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

      case "BookmarkFill":
        return <BookmarkFill className={`me-1 ${this.props.iconPadding}`} />;

      case "XCircleFill":
        return <XCircleFill className={`me-1 ${this.props.iconPadding}`} />;

      case "Lightbulb":
        return <Lightbulb className={`me-1 ${this.props.iconPadding}`} />;

      case "LightbulbOff":
        return <LightbulbOff className={`me-1 ${this.props.iconPadding}`} />;

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
