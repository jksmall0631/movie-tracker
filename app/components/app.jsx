import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }


  componentWillMount() {
    const movieDatabase = ('https://api.themoviedb.org/3/discover/movie?api_key=1d0514b501ec10b990725f0f8f54ce01')
    fetch(movieDatabase).then((response) => {
    return response.json();
    }).then((response) => {
    let movies = response.results
    this.props.handleAPI(movies)
   })
 }


  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        {this.props.children}
      </div>
    )
  }
}
