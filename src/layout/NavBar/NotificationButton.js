import {
  Nav,
  Button,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";

import Notification from "./Notification";
import NotificationBadge from "./NotificationBadge";

import IconText from "../global/IconText";

import { BookmarkStar, MusicNote, MusicNoteList } from "react-bootstrap-icons";

function NotificationButton() {
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
                <Notification
                  icon="MusicNote"
                  text="Track 2 on Guy Mantzur Live at Teton's has been ID'd as Guy Mantzur -- Rampstamper"
                />
                <Notification
                  icon="MusicNoteList"
                  text="Navar Live at Tetons has new tracks that have been identified"
                />
                <Notification
                  icon="MusicNoteList"
                  text="Guy J Echos 003 has new tracks that have been identified"
                />
                <Notification
                  icon="MusicNote"
                  text="Track 21 on Gui Baragone has been ID'd as Alex Orion -- Truly (Twiw Remix)"
                />
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
          <NotificationBadge />
        </Button>
      </OverlayTrigger>
    </Nav.Link>
  );
}

export default NotificationButton;
