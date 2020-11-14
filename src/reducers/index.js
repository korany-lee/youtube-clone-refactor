import { combineReducers } from "redux";
import settingReducer from "./setting";
import videoReducer from "./video";
import searchReducer from "./search";

export default combineReducers({
  searchReducer,
  settingReducer,
  videoReducer,
});
