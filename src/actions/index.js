import axios from "axios";
import { YOUTUBE_API_KEY } from "../../config/youtube";

export const SET_USERNAME = "SET_USERNAME";
export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_CURRENT_VIDEO = "SET_CURRENT_VIDEO";
export const SET_VIDEOS = "SET_VIDEOS";

export const setUsername = name => ({
	type: SET_USERNAME,
	name,
});

export const setDarkMode = value => ({
	type: SET_DARK_MODE,
	value,
});

export const setCurrentVideo = video => ({
	type: SET_CURRENT_VIDEO,
	video,
});

export const setSearchVideos = videos => ({
	type: SET_VIDEOS,
	videos,
});

export const thunkedSearch = ({ query, max = 5 }) => dispatch =>
	axios
		.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${query}&maxResult=${max}&type=video&videoEmbeddable=true`
		)
		.then(resp => resp.data)
		.then(({ items }) => {
			dispatch(setSearchVideos(items));
		});
