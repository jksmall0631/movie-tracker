import React, { Component } from 'react';

const MovieIndex = ({appReducer}) => {
  console.log(appReducer);
  let movie = appReducer.map( movie => {
    return <article key={ movie.id }>
              <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              <button>Favorite</button>
           </article>
         })

  return (
    <div>
    {movie}
    </div>
  )
}

export default MovieIndex;
