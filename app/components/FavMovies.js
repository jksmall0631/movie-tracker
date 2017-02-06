import React, {Component} from 'react';
import {Link} from 'react-router';
import MovieIndex from '../containers/MovieIndex-container';

export default class FavMovies extends Component{

  // componentWillMount(){
  //   this.filterFavorites()
  // }
  //
  // filterFavorites (dbFavs, newFavs) {
  //   let added = newFavs.map((stuff) => {
  //     return stuff.add
  //   })
  //   let deleted = newFavs.map((stuff) => {
  //     return stuff.del
  //   })
  //   let finalFaves = (dbFavs).concat(added) || []
  //   let noDuplicates = _.uniq(finalFaves, (movie) => {
  //     return movie.title;
  //   });
  //   this.props.setFinalFavs(noDuplicates);
  //   // this.props.switchToFavs();
  // }

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
