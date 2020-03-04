export const SET_USERNAME = "SET_USERNAME";
export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_CURRENT_VIDEO = "SET_CURRENT_VIDEO";

export const setUsername = name => ({
  type: SET_USERNAME,
  name
});

export const setDarkMode = value => {
  // TODO
};

export const setCurrentVideo = video => ({
  type: SET_CURRENT_VIDEO,
  video
});
