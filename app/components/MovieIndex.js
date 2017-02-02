import React, { Component } from 'react';

const MovieIndex = ({movieReducer, userSignInReducer}) => {

  const addFavorite = (userId, movie) => {
    debugger
    const server = ('http://localhost:3000/api/users/favorites/new')
    fetch(server, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user_id: userId, movie_id: movie.id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date, vote_average: movie.vote_average, overview: movie.overview})
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  // * ##### Add Favorite - `/users/favorites/new`
  //   To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  //   Keep in mind the response only gives the new favorite id

  console.log(movieReducer);
  let movie = movieReducer.map( movie => {
    return <article key={ movie.id }>
              <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              <button onClick={ () => addFavorite(userSignInReducer.id, movie) }>Favorite</button>
           </article>
         })

  return (
    <div>
    {movie}
    </div>
  )
}

export default MovieIndex;
