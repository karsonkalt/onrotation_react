import {
  Nav,
  Button,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";

import { Component } from "react";
import Notification from "./Notification";
import NotificationBadge from "./NotificationBadge";

import IconText from "../global/IconText";

class NotificationButton extends Component {
  numOfNotifications = () => {
    return this.props.notifications.length;
  };

  chooseIcon = (type) => {
    return type == "track" ? "MusicNote" : "MusicNoteList";
  };

  renderNotifications = () => {
    return this.props.notifications.map((notification) => {
      return (
        <Notification
          icon={this.chooseIcon(notification.type)}
          text={notification.message}
        />
      );
    });
  };

  render() {
    return (
      <Nav.Link>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover className="shadow-lg">
              <Popover.Header as="h3">{`Notifications`}</Popover.Header>
              <Popover.Body style={{ padding: "0" }}>
                <ListGroup variant="flush">
                  {this.renderNotifications()}
                </ListGroup>
              </Popover.Body>
            </Popover>
          }
        >
          <Button
            variant="outline-primary"
            size="sm"
            className="position-relative"
          >
            <IconText icon="Bookmark" text="Notifications" />
            <NotificationBadge count={this.numOfNotifications()} />
          </Button>
        </OverlayTrigger>
      </Nav.Link>
    );
  }
}

export default NotificationButton;
