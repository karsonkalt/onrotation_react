import { Component } from "react";
import { Button } from "react-bootstrap";
import IconText from "./IconText";

class BookmarkButton extends Component {
  render() {
    if (this.props.bookmarked === false) {
      return (
        <Button
          onClick={this.props.handleBookmarkClick}
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
          onClick={this.props.handleBookmarkClick}
          className="me-3"
          variant="primary"
          size="sm"
        >
          <IconText icon="BookmarkFill" text="Bookmarked" />
        </Button>
      );
    }
  }
}

export default BookmarkButton;
