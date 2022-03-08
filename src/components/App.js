import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() { // default video when app first loads.
      this.onTermSubmit('flowers'); // default search term.
    }

    onTermSubmit = async term => {    // this method is attached to the prop of a child component "Search Bar"
      // This function is invoked when the child component's onFormSubmit prop is triggered.
        const response = await youtube.get('/search', {
          params: {
            q: term
          }
        })

        this.setState({videos: response.data.items,
                        selectedVideo: response.data.items[0]}) // default video to the first search result
    }

    onVideoSelect = (video) => {
      // update the selected video
      this.setState({selectedVideo: video})
    }


  render() {
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
              </div>
            </div>
          </div>

      </div>
    )
  }
}
