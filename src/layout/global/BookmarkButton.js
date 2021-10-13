import { Button } from "react-bootstrap";
import IconText from "./IconText";

const BookmarkButton = (props) => {
  if (props.bookmarked === false) {
    return (
      <Button
        onClick={props.handleBookmarkClick}
        className="me-3"
        variant="outline-primary"
        size="sm"
      >
        <IconText icon="Bookmark" text="Bookmark" />
      </Button>
    );
  } else {
    return (
      <Button
        onClick={props.handleBookmarkClick}
        className="me-3"
        variant="primary"
        size="sm"
      >
        <IconText icon="BookmarkFill" text="Bookmarked" />
      </Button>
    );
  }
};

export default BookmarkButton;
