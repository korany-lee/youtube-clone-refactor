import React from "react";
const he = require("he");

const VideoListEntry = ({ video, onEntryClick }) => (
	<div className="video-list-entry">
		<div className="media-left media-middle">
			<img
				className="media-object"
				src={video.snippet.thumbnails.default.url}
				alt=""
			/>
		</div>
		<div className="media-body">
			<div className="video-list-entry-title" onClick={onEntryClick}>
				{(video.snippet.title = he.decode(video.snippet.title))}
			</div>
			<div className="video-list-entry-detail">{video.snippet.description}</div>
		</div>
	</div>
);

export default VideoListEntry;
