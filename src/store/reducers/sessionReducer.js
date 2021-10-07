import { v4 as uuid } from "uuid";

const initialState = {
  loggedIn: false,
  username: "",
  userId: "",
};

export default function sessionReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "LOGIN":
      debugger;
      return {
        loggedIn: true,
        username: action.payload.username,
        userId: action.payload.userId,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}
