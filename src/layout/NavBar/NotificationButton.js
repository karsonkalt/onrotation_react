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
  componentDidMount() {
    this.props.fetchNotifications(this.props.userId);
  }

  numOfNotifications = () => {
    return this.props.notifications.length;
  };

  chooseIcon = (notification) => {
    return notification.track ? "MusicNote" : "MusicNoteList";
  };

  generateMessage = (notification) => {
    return notification.track
      ? `A track you bookmarked has beed identified as ${notification.track.name} by ${notification.track.artist.name}`
      : `${notification.tracklist.name} has new tracks that have been identified`;
  };

  renderNotificationButton = () => {
    if (this.numOfNotifications() > 0) {
      return <NotificationBadge count={this.numOfNotifications()} />;
    }
  };

  notificationType = (notification) => {
    return notification.track
      ? { notificationType: "track" }
      : { notificationType: "tracklist" };
  };

  renderNotifications = () => {
    if (this.props.notifications.length > 0) {
      return this.props.notifications.map((notification) => {
        return (
          <Notification
            icon={this.chooseIcon(notification)}
            text={this.generateMessage(notification)}
            fetchReadNotification={this.props.fetchReadNotification}
            notificationId={notification.id}
            userId={this.props.userId}
            notificationType={this.notificationType(notification)}
          />
        );
      });
    } else {
      return <div className="m-3">No notifications to display</div>;
    }
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
            {this.renderNotificationButton()}
          </Button>
        </OverlayTrigger>
      </Nav.Link>
    );
  }
}

export default NotificationButton;
