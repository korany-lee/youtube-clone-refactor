import React from "react";
const he = require("he");

const VideoPlayer = ({ video, darkMode }) =>
	!video ? (
		<div className="video-player">Please wait...</div>
	) : (
		<div className="video-player">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe
					className="embed-responsive-item"
					src={`https://www.youtube.com/embed/${video.id.videoId}`}
					allowFullScreen></iframe>
			</div>
			<div
				className={
					darkMode ? "video-player-details dark" : "video-player-details"
				}>
				<h3>{(video.snippet.title = he.decode(video.snippet.title))}</h3>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);

export default VideoPlayer;
