import React, { Component } from 'react';
import { Link } from 'react-router'


const MovieIndex = ({movieReducer, userSignInReducer}) => {

  const addFavorite = (userId, movie) => {
    console.log(userId, movie)
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

  if(userSignInReducer.fav){
    if(userSignInReducer.fav.data){
      allMovies = userSignInReducer.fav.data.data
    }
  }
  let allMovies = movieReducer
  let movie = allMovies.map( movie => {
    return <article className='movie-card' key={ movie.id }>
              <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              {userSignInReducer.user ? <button onClick={ () => addFavorite(userSignInReducer.user.data.id, movie) }> Favorite </button> : ''}
           </article>
         })

  return (
    <div className='movie-container'>
      <Link to={'users/' + userSignInReducer.id + '/favorites'} >
        {userSignInReducer.user ? <button className='favs'> Show Favorites </button> : ''}
      </Link>
    {movie}
    </div>
  )
}

export default MovieIndex;
