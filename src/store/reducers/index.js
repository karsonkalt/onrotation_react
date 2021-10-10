import { combineReducers } from "redux";
import indexReducer from "./indexReducer";
import tracklistShowReducer from "./tracklistShowReducer";
import notificationReducer from "./notificationReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  indexReducer,
  tracklistShowReducer,
  notificationReducer,
  sessionReducer,
});
