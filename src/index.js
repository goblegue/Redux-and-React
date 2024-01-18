import ReactDOM from "react-dom";
import React from "react";
import SearchBar from "./components/searchbar";

const API_KEY = "AIzaSyCY6Tz3rV2xq4NQgCoGDk3zM4iBtB5bjRQ";

const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
