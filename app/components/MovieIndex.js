import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

 // ({this.props.movieReducer, this.props.userSignInReducer}) =>

export default class MovieIndex extends Component{
  constructor(){
    super();
    this.state = {
      favs: [],
    }
  }

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

  filterFavorites (dbFavs, newFavs) {
    let formatted = newFavs.map((stuff) => {
      return stuff.action.newFav
    })
    let finalFaves = (dbFavs).concat(formatted) || []
    let noDuplicates = _.uniq(finalFaves, (movie) => {
      return movie.title;
    });
    this.setState({favs: noDuplicates})
    this.props.switchToFavs();
  }

  render(){
    console.log(this)
    let allMovies = this.props.movieIndexReducer.toggle ? this.state.favs : this.props.movieReducer
    let movie = allMovies.map( movie => {
      return <article className='movie-card' key={ movie.id }>
                <img src={ 'https://image.tmdb.org/t/p/w342' + movie.poster_path } />
                <h3>{ movie.title }</h3>
                <p>{ movie.overview }</p>
                {this.props.userSignInReducer.user ? <button onClick={ () => this.addFavorite(this.props.userSignInReducer.user.data.id, movie) }> Favorite </button> : ''}
             </article>
           })

    return (
      <div className='movie-container'>
        <Link to={'/favorites'} >
          {this.props.userSignInReducer.user ? <button className='favs' onClick={() => this.filterFavorites(this.props.userSignInReducer.fav.data.data, this.props.movieIndexReducer)}> Show Favorites </button> : ''}
        </Link>
      {movie}
      </div>
    )}
  }
