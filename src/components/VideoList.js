import React from "react";
import VideoListEntry from "../containers/VideoListEntry";

const VideoList = ({ videos, user, darkMode }) => (
	<div className={darkMode ? "video-list dark" : "video-list"}>
		<h5>{user ? user.name : ""}님이 검색하신 동영상입니다.</h5>
		<div className="media">
			{videos.map(video => (
				<VideoListEntry key={video.etag} video={video} />
			))}
		</div>
	</div>
);

export default VideoList;
