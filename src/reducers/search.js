import { SET_VIDEOS } from "../actions/index";

const initialState = {
	videos: [],
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VIDEOS:
			// TODO
			return { ...state, videos: action.videos };
		//break;
		default:
			return state;
	}
};

export default searchReducer;
