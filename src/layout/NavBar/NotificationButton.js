import {
  Nav,
  Badge,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";

import Notification from "./Notification";

import { BookmarkFill, MusicNote, MusicNoteList } from "react-bootstrap-icons";

function NotificationButton() {
  return (
    <Nav.Link href="#notifications">
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover className="shadow-lg">
            <Popover.Header as="h3">{`Notifications`}</Popover.Header>
            <Popover.Body style={{ padding: "0" }}>
              <ListGroup variant="flush">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
              </ListGroup>
            </Popover.Body>
          </Popover>
        }
      >
        <Badge bg="primary">
          <BookmarkFill />
          10
        </Badge>
      </OverlayTrigger>
    </Nav.Link>
  );
}

export default NotificationButton;
