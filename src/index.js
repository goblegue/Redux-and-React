import ReactDOM from "react-dom";
import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videolist";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyCY6Tz3rV2xq4NQgCoGDk3zM4iBtB5bjRQ";



class App extends Component {
  constructor(props){
    super(props);
    this.state={ videos : [] };
    YTSearch({ key: API_KEY, term: "johny harris" },  (videos) => {
      this.setState( {videos} );
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
