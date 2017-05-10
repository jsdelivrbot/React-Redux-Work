import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY='AIzaSyD5YRi9nANkFkNiKiw6p_8ioIlcSZoy4Vo';

// create new componenet
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key:API_KEY, term: 'Surfboards' }, (videos) => {
      this.setState({ videos });

      console.log(this.state.videos);
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    )
  }
}

// TUrn compotnent into HTML & Put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
