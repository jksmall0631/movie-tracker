import React, { Component } from 'react';
import { Link } from 'react-router';

 // ({this.props.movieReducer, this.props.userSignInReducer}) =>

export default class MovieIndex extends Component {

  addFavorite(userId, movie) {
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
    .then(response => this.props.newFav(movie))
    .then(response => console.log(response))
  }

  deleteFavorite (userId, movie) {
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
    .then(response => console.log(response))
  }

  render(){
    //just a variable to set the text of the button
    let buttonText;
    window.location.pathname === '/' ? buttonText = 'Favorite' : buttonText = 'Delete'

    let allMovies = this.props.movies || [];
    let movie = allMovies.map( movie => {
      return <article className='movie-card' key={ movie.id }>
                <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
                <h3>{ movie.title }</h3>
                <p>{ movie.overview }</p>
                //this is a set up as a ternary within a ternary which we will super get yelled at for
                {this.props.userSignInReducer.user ?
                  <button onClick={ () => window.location.pathname === '/' ? this.addFavorite(this.props.userSignInReducer.user.data.id, movie)
                  : this.deleteFavorite(this.props.userSignInReducer.user.data.id, movie)}> {buttonText} </button> : ''}
             </article>
           })

    return (
      <div className='movie-container'>
      {movie}
      </div>
    )}
  }
