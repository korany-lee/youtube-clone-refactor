import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";
import VideoList from "./VideoList";
import Setting from "./Setting";
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";
import { setCurrentVideo } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      isSettingOpen: false
    };
  }

  componentDidMount() {
    this.getYouTubeVideos("코드스테이츠");
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };

    searchYouTube(options, videos => {
      this.setState({
        videos: videos
      });
      this.props.dispatch(setCurrentVideo(videos[0]));
    });
  }

  handleSettingButtonClick() {
    this.setState(prevState => ({
      isSettingOpen: !prevState.isSettingOpen
    }));
  }

  render() {
    return (
      <div className={this.props.darkMode ? "main dark" : "main light"}>
        <Nav
          handleSearchInputChange={this.getYouTubeVideos.bind(this)}
          handleSettingButtonClick={this.handleSettingButtonClick.bind(this)}
        />
        <div className="col-md-7">
          <VideoPlayer
            video={this.props.currentVideo}
            darkMode={this.props.darkMode}
          />
        </div>
        <div className="col-md-7">
          <VideoList videos={this.state.videos} />
        </div>
        <Setting
          isOpen={this.state.isSettingOpen}
          handleClose={this.handleSettingButtonClick.bind(this)}
        ></Setting>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentVideo: state.videoReducer.currentVideo,
    darkMode: state.settingReducer.darkMode
  };
};

export default connect(mapStateToProps)(App);
