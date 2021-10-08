import { Component } from "react";
import {
  Nav,
  Badge,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";

import { MusicNote, MusicNoteList } from "react-bootstrap-icons";

class Notification extends Component {
  handleClick = () => {
    this.props.fetchReadNotification(
      {
        notificationId: this.props.notificationId,
        notificationType: this.props.notificationType,
      },
      this.props.userId
    );
  };

  selectIcon = (icon) => {
    switch (icon) {
      case "MusicNote":
        return <MusicNote />;

      case "MusicNoteList":
        return <MusicNoteList />;

      default:
        return null;
    }
  };

  render() {
    return (
      <ListGroup.Item
        action
        className="align-items-center"
        style={{ display: "flex" }}
        onClick={this.handleClick}
      >
        <div className="pe-3">{this.selectIcon(this.props.icon)}</div>
        <div>{this.props.text}</div>
      </ListGroup.Item>
    );
  }
}

export default Notification;
