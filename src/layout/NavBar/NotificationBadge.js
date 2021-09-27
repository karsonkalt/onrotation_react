import { Component } from "react";

class NotificationBadge extends Component {
  render() {
    return (
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {this.props.count}
        <span class="visually-hidden">unread messages</span>
      </span>
    );
  }
}

export default NotificationBadge;
