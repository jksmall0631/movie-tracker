import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

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

  filterFavorites (dbFavs, newFavs) {
    let formatted = newFavs.map((stuff) => {
      return stuff.action.newFav
    })
    let finalFaves = (dbFavs).concat(formatted) || []
    let noDuplicates = _.uniq(finalFaves, (movie) => {
      return movie.title;
    });
    this.props.setFinalFavs(noDuplicates);
    this.props.switchToFavs();
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h1>Not Quite Netflix</h1>
          <Link to='/login'>
            {!this.props.userSignInReducer.user ? <button className='signIn'> Sign In </button> : ''}
          </Link>
          <Link to={'/favorites'} >
            {this.props.userSignInReducer.user && !this.props.movieReducer.toggle ? <button className='favs' onClick={() => this.filterFavorites(this.props.userSignInReducer.fav.data.data, this.props.movieIndexReducer)}> Show Favorites </button> : ''}
          </Link>
          <Link to={'/'} >
            {this.props.movieReducer.toggle ? <button className='back' > Back </button> : ''}
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
