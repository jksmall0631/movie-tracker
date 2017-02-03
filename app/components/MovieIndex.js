import React, { Component } from 'react';
import { Link } from 'react-router'


const MovieIndex = ({movieReducer, userSignInReducer}) => {

  const addFavorite = (userId, movie) => {
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

  let movie = movieReducer.map( movie => {
    return <article className='movie-card' key={ movie.id }>
              <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              <button onClick={ () => addFavorite(userSignInReducer.id, movie) }> Favorite </button>
           </article>
         })

  return (
    <div className='movie-container'>
      <Link to={'users/' + userSignInReducer.id + '/favorites'} >
        {userSignInReducer.user ? <button className='favs' onClick={()=> showFavorites(userSignInReducer.id)}> Show Favorites </button> : ''}
      </Link>
    {movie}
    </div>
  )
}

export default MovieIndex;
