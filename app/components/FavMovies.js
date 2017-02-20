import React, {Component} from 'react';
import {Link} from 'react-router';
import SingleMovie from './SingleMovie';

export default class FavMovies extends Component{
  constructor(){
    super();
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

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
      this.props.deleteFav(movie);
    })
  }

  render(){
    let favMovies = this.props.allMoviesReducer;
    let movies;
    if(favMovies){
      movies = favMovies.map((movie) => {
        console.log(movie);
        return (
          <SingleMovie
            key={movie.id}
            movie={movie}
            addDeleteFavorite={this.deleteFavorite}
            buttonText='Remove'/>
        );
      })
    }else{
      movies = 'No Movies';
    }
    return(
      <div className='movie-container'>
        <Link to={'/'} >
          <button className='back-btn'> Back </button>
        </Link>
        {movies}
      </div>
    )
  }
}
