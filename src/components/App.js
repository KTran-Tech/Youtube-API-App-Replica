import React, {Component}from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends Component {

    state = {
        videos: []
    }

    onTermSubmit = async term => {
        const response = youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: (await response).data.items
        })
    }
    
    render(){
        return(
            <section className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
            </section>
        )
    }

}

export default App
