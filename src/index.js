import ReactDOM from "react-dom";
import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videolist";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyC302fABTdIDT2SBD7hdf2avEexSsa38wQ";



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos : [],
      selectedVideo : null 
    };
    this.videoSearch('');
  }
  videoSearch(term){
    YTSearch({ key: API_KEY, term: term },  (videos) => {
      this.setState( {
        videos:videos,
        selectedVideo:videos[0]
      } );
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearched ={Term=> this.videoSearch(Term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        videos={this.state.videos} 
        onVideoSelected={(selectedVideo)=> this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
