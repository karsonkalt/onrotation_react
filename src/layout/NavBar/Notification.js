import {
  Nav,
  Badge,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";

import { BookmarkFill, MusicNote, MusicNoteList } from "react-bootstrap-icons";

function Notification() {
  return (
    <ListGroup.Item
      action
      className="align-items-center"
      style={{ display: "flex" }}
    >
      <div className="pe-3">
        <Badge bg="primary">
          <MusicNote />
        </Badge>
      </div>
      <div>Track 2 on Guy Mantzur Live at Teton's has been ID'd</div>
    </ListGroup.Item>
  );
}

export default Notification;
