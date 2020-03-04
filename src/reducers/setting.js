import { SET_USERNAME, SET_DARK_MODE } from "../actions/index";

const settingReducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
    // TODO
    case SET_DARK_MODE:
    // TODO
    default:
      return state;
  }
};

export default settingReducer;
