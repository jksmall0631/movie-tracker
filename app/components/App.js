import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  componentWillMount() {
    const movieDatabase = ('https://api.themoviedb.org/3/discover/movie?api_key=1d0514b501ec10b990725f0f8f54ce01')
    fetch(movieDatabase)
      .then(response => {
        return response.json()})
      .then(response => {
        let movies = response.results
        this.props.handleAPI(movies)
    })
  }

  render() {
    return (
      <div>
        <h1>Not Quite Netflix</h1>
        <Link to='/login'>
          {!this.props.userSignInReducer.id ?
             <button className='sign-in-btn'> Sign In </button>
             : ''}
        </Link>
        {this.props.children}
      </div>
    )
  }
}
