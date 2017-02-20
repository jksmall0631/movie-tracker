import React, {Component} from 'react';
import {Link} from 'react-router';
import SingleMovie from './SingleMovie';

export default class AllMovies extends Component{
  constructor(){
    super();
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(movie) {
    let userId = this.props.userSignInReducer ? this.props.userSignInReducer.user.data.id : '';
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
      this.props.addFav(movie);
    })
  }

  render(){
    let allMovies = this.props.movieReducer.movies;
    let movies;
    if(allMovies){
      movies = allMovies.map((movie) => {
        return (
          <SingleMovie
            key={movie.id}
            movie={movie}
            addDeleteFavorite={this.addFavorite}
            buttonText='&#9734;'/>
        );
      })
    }else{
      movies = 'No Movies';
    }
    return(
      <div className='movie-container'>
        {movies}
      </div>
    )
  }
}
