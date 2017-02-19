import React, { Component } from 'react';
import { Link } from 'react-router';

const SingleMovie = ({movie, addDeleteFavorite}) => {

  return (
    <article className='movie-card' key={ movie.id }>
      <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
      <button onClick={ () => addDeleteFavorite(movie)} className='user-btn'>add/delete</button>
      <h3 className='movie-title'>{ movie.title }</h3>
      <p className='movie-overview'>{ movie.overview }</p>
    </article>
  )
}

export default SingleMovie;
