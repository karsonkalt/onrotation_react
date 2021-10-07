const initialState = [];

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTIFICATIONS":
      return action.payload.map((notification) => {
        return {
          ...notification,
        };
      });

    // This should send a post to the server? move to fetch calls.
    case "READ_NOTIFICATION":
      return state.filter(
        (notification) => notification.id !== action.payload.id
      );

    default:
      return state;
  }
}
