import React, { Component } from 'react';

const MovieIndex = ({appReducer}) => {

  let movie = appReducer.map( movie => {
    return <article key={ movie.id }>
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
           </article>
         })

  return (
    <div>
    {movie}
    </div>
  )
}

export default MovieIndex;
