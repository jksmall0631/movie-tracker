import React, {Component} from 'react';
import MovieIndex from '../containers/MovieIndex-container';

export default class AllMovies extends Component{
  render(){
    return(
      <MovieIndex movies={this.props.movieReducer.movies}/>
    )
  }
}
