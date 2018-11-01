import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './SearchContainer';
import GifsContainer from './GifsContainer';
import apiKey from './apiKey.js'

const endPoint = 'https://http://api.giphy.com/v1/gifs/search?q=';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      hasSearched: false,
      gifs: []
    }
  }

  handleSearch = (search) => {
    console.log('handleSearch');
    this.setState({
      search: search,
      hasSearched: true
    });
  }

  // getGifs = async () => {
  //   try {
  //     const endPoint2 = endPoint + this.state.search + '&api_key=' + apiKey + '&limit=10';
  //     const gifs = await fetch(endPoint2);
  //     console.log(gifs);
  //   } catch(err) {
  //     return err
  //   }
  // }

  // componentDidMount(){
  //   this.getGifs().then((gifs) => {
  //     console.log(gifs, ' this is data');
  //     this.setState({gifs: gifs});
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
    console.log(this.state.search, ' this.state.search');
    console.log(this.state.gifs);
    return (
      <div className="App">
        <SearchContainer handleSearch={this.handleSearch} />
        {this.state.hasSearched ?
          <GifsContainer search={this.state.search}/> :
          <p>No gifs to display</p>}
      </div>
    );
  }
}

export default App;
