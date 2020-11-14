import { SET_USERNAME, SET_DARK_MODE } from "../actions/index";

const initialState = {
  currentUser: { name: "Guest" },
  darkMode: false
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      // TODO
      break;
    case SET_DARK_MODE:
      // TODO
      break;
    default:
      return state;
  }
};

export default settingReducer;
