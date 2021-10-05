import { combineReducers } from "redux";
import tracklistReducer from "./tracklistReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  tracklistReducer,
  notificationReducer,
});
