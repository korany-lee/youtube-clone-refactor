import { SET_CURRENT_VIDEO } from "../actions/index";

const videoReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_CURRENT_VIDEO:
			return Object.assign({}, state, {
				currentVideo: action.video,
			});
		default:
			return state;
	}
};

export default videoReducer;
