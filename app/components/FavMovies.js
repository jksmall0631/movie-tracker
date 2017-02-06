import React, {Component} from 'react';
import {Link} from 'react-router';
import MovieIndex from '../containers/MovieIndex-container';

export default class FavMovies extends Component{

  render(){
    return(
      <div>
        <Link to={'/'} >
          <button className='back-btn'> Back </button>
        </Link>
        <MovieIndex movies={this.props.allMoviesReducer.finalFaves}/>
      </div>
    )
  }
}
