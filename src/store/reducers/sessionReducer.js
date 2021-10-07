const initialState = {
  loggedIn: false,
  username: "",
  userId: "",
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        username: action.payload.username,
        userId: action.payload.id,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}
