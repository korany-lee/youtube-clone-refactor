import { connect } from "react-redux";
import { setCurrentVideo } from "../actions";
import VideoListEntry from "../components/VideoListEntry";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onEntryClick: () => {
			return dispatch(setCurrentVideo(ownProps.video));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListEntry);
