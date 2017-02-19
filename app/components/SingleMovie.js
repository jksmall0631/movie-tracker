import React, { Component } from 'react';
import { Link } from 'react-router';
// import filterFavorites from './filterFavorites';

const SingleMovie = ({movie, addDeleteFavorite}) => {

  // render(){
    // let allMovies = this.props.movies || [];
    // let movie = allMovies.map( movie => {

      return (
        <article className='movie-card' key={ movie.id }>
          <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />

          {/* {this.props.userSignInReducer.user && window.location.pathname === '/' ?
          <p onClick={ () => addFavorite(movie)} className='star'> &#9733; </p> :
          ''}

          {this.props.userSignInReducer.user && window.location.pathname === '/favorites' ?
          <button onClick={ () => deleteFavorite(movie)} className='user-btn'> Remove  </button> :
          ''} */}
          <button onClick={ () => addDeleteFavorite(movie)} className='user-btn'>add/delete</button>

          <h3 className='movie-title'>{ movie.title }</h3>
          <p className='movie-overview'>{ movie.overview }</p>
        </article>
      )
    // return (
    //   <div className='movie-container'>
    //   {movie}
    //   </div>
    // )
    // }
  // }
}

export default SingleMovie;
