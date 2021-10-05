import { combineReducers } from "redux";
import tracklistReducer from "./tracklistReducer";
import notificationReducer from "./notificationReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  tracklistReducer,
  notificationReducer,
  sessionReducer,
});
