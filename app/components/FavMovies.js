import React, {Component} from 'react';
import MovieIndex from '../containers/MovieIndex-container';

export default class FavMovies extends Component{
  render(){
    return(
      <MovieIndex movies={this.props.movieReducer.final.finalFaves}/>
    )
  }
}
