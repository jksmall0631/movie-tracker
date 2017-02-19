import React, {Component} from 'react';
import {Link} from 'react-router';
import _ from 'underscore';
// import MovieIndex from '../containers/MovieIndex-container';
import SingleMovie from './SingleMovie';
import filterFavorites from './filterFavorites';

export default class AllMovies extends Component{

  addFavorite(movie) {
    let userId = this.props.userSignInReducer.user.data.id
    const server = ('http://localhost:3000/api/users/favorites/new')
    fetch(server, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        movie_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview})
    })
    .then(response => response.json())
    .then(response => {
      movie.fav = true;
      let finalist = filterFavorites(db, movie, storeFavs)
      this.props.setFinalFavs(finalist);
    })
  }

  render(){
    let allMovies = this.props.movieReducer.movies;
    let movie;
    if(allMovies){
      movie = allMovies.map((movie) => {
        return (
          <SingleMovie
            key={movie.id}
            movie={movie}
            addDeleteFavorite={this.addFavorite}/>
        );
      })
    }else{
      movie = 'No Movies';
    }
    return(
      <div>
        <Link to={'/favorites'} >
          {this.props.userSignInReducer.user && !this.props.movieReducer.toggle ? <button className='favs' onClick={() => this.moveToFavorites(this.props.userSignInReducer.fav.data.data, this.props.movieIndexReducer, this.props.allMoviesReducer.finalFaves)}> Show Favorites </button> : ''}
        </Link>
        {movie}
      </div>
    )
  }
}
