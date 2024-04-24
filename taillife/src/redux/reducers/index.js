import { combineReducers } from "redux";
import tailReducer from "./tailReducer";

export default combineReducers({
  tail: tailReducer,
});
