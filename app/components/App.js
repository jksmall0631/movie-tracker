import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  componentWillMount() {
    const {store} = this.props
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
        <div className='header'>
          <h1>Not Quite Netflix</h1>
          <Link to='/login'>
            {!this.props.userSignInReducer.user ? <button className='signIn'> Sign In </button> : ''}
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
