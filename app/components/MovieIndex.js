import React, { Component } from 'react';
import { Link } from 'react-router';
import filterFavorites from './filterFavorites';

export default class MovieIndex extends Component{

  addFavorite(userId, movie, db, newFavs, storeFavs) {
    // let storeFinalFavs = storeFavs.finalFaves?storeFavs.finalFaves:[];
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
    .then(response => {
      movie.fav = true;
      let finalist = filterFavorites(db, movie, storeFavs)
      this.props.setFinalFavs(finalist);
    })
  }

  deleteFavorite (userId, movie, db, delFavs, storeFavs) {
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
      movie.fav = false;
      let finalist = filterFavorites(db, movie, storeFavs)
      this.props.setFinalFavs(finalist)
    })
  }

  render(){
    let allMovies = this.props.movies || [];
    let movie = allMovies.map( movie => {

      return <article className='movie-card' key={ movie.id }>

                <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />

                {this.props.userSignInReducer.user && window.location.pathname === '/' ?
                <p onClick={ () => this.addFavorite(this.props.userSignInReducer.user.data.id, movie, this.props.userSignInReducer.fav.data.data, this.props.movieIndexReducer, this.props.allMoviesReducer)} className='star'> &#9733; </p> :
                ''}

                {this.props.userSignInReducer.user && window.location.pathname === '/favorites' ?
                <button onClick={ () => this.deleteFavorite(this.props.userSignInReducer.user.data.id, movie, this.props.userSignInReducer.fav.data.data, this.props.movieIndexReducer, this.props.allMoviesReducer)} className='user-btn'> Remove  </button> :
                ''}

                <h3 className='movie-title'>{ movie.title }</h3>

                <p className='movie-overview'>{ movie.overview }</p>

             </article>
           })

    return (
      <div className='movie-container'>
      {movie}
      </div>
    )}
  }
