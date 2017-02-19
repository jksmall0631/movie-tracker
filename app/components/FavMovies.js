import React, {Component} from 'react';
import {Link} from 'react-router';
import SingleMovie from './SingleMovie';
// import MovieIndex from '../containers/MovieIndex-container';

export default class FavMovies extends Component{

  deleteFavorite (movie) {
    let userId = this.props.userSignInReducer.user.data.id
    const server = 'http://localhost:3000/api/users'
    fetch(`${server}/${userId}/favorites/${movie.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => {
      movie.fav = false;
      let finalist = filterFavorites(db, movie, storeFavs)
      this.props.setFinalFavs(finalist)
    })
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Link to={'/'} >
          <button className='back-btn'> Back </button>
        </Link>
        {/* <MovieIndex movies={this.props.allMoviesReducer.favs.finalFaves}/> */}
        <SingleMovie
          movies={this.props.movieReducer.movies}
          addDeleteFavorite={this.deleteFavorite}/>
      </div>
    )
  }
}
