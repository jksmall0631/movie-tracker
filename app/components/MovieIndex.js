import React, { Component } from 'react';
import { Link } from 'react-router'


export default class MovieIndex extends Component {
  constructor(props){
    super(props)
  }

  addFavorite (userId, movie) {
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
    .then(response => this.handleResponse(response))
    .then(response => console.log(response))
//    .then(jsoned => console.log(jsoned))
  }

  handleResponse(response) {
    if (response.success) {
      this.getFavorites(userId)
    }
//    return response
  }

  getFavorites (userId) {
    const server = (`http://localhost:3000/api/users/${userId}/favorites`)
    fetch(server, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
//    .then(response => this.props.handleFavorites(response))
  }

  toggleFavorite (faves, movie) {
    // does the id of this movie exist in our favorites in our store
    const favorite = faves.find(fave => movie.id === fave.movie_id)
    // if so, make the api call to delete it
    favorite ? this.deleteFavorite(this.props.userSignInReducer.user.data.id, movie) :
    // if not, make the api call to add it
    this.addFavorite(this.props.userSignInReducer.user.data.id, movie)
    this.getFavorites(this.props.userSignInReducer.user.data.id)
    // update the store with the new favorites
  }

  render () {
    let movie = this.props.movieReducer.map( movie => {
      return <article className='movie-card' key={ movie.id }>
              <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              <button onClick={ () => this.addFavorite(this.props.userSignInReducer.user.data.id
, movie) }> Favorite </button>
              <button onClick={ () => this.deleteFavorite(this.props.userSignInReducer.user.data.id
, movie) }> Unfavorite </button>
          <button onClick={ () => this.toggleFavorite(this.props.userSignInReducer.fav.data.data, movie)}>Toggle Favorite</button>
           </article>
    })
    return (
      <div className='movie-container'>
      <Link to={'users/' + this.props.userSignInReducer.id + '/favorites'} >
        {this.props.userSignInReducer.user ? <button className='favs' onClick={()=> showFavorites(this.props.userSignInReducer.user.data.id
)}> Show Favorites </button> : ''}
      </Link>
      {movie}
      </div>
    )
  }
}
