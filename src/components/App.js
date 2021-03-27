import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, isLoading: true };

  componentDidMount() {
    this.makeRequest("Incredible India");
  }

  makeRequest = async (searchTerm) => {
    try {
      this.setState({ isLoading: true });
      const result = await youtube.get("/search", {
        params: {
          q: searchTerm,
        },
      });
      this.setState({
        videos: result.data.items,
        selectedVideo: result.data.items[0],
        isLoading: false,
      });
    } catch (e) {
      console.error(e);
    }
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: { ...video } });
    console.log("from app", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar makeRequest={this.makeRequest} />
        <div className="ui grid">
          {this.state.isLoading ? (
            <div class="ui active dimmer">
              <div class="ui text loader">Loading</div>
            </div>
          ) : (
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                ></VideoList>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
