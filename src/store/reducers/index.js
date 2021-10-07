import { combineReducers } from "redux";
import tracklistIndexReducer from "./tracklistIndexReducer";
import tracklistShowReducer from "./tracklistShowReducer";
import notificationReducer from "./notificationReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  tracklistIndexReducer,
  tracklistShowReducer,
  notificationReducer,
  sessionReducer,
});
