import React, {Component}from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

const KEY = 'AIzaSyCnB-sy11X0L1vGGPPrit2KEBN7Mk7giMY';

class App extends Component {

    state = {
        videos: []
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
              }
        })

        this.setState({
            videos: response.data.items
        })
    }
    
    render(){
        return(
            <section className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              <VideoList videos={this.state.videos}/>
            </section>
        )
    }

}

export default App
