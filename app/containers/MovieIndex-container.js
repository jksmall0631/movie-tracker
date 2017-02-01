import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAPI: (movies) => {
//       dispatch(addMovies(movies))
//     }
//   }
// }

export default connect(mapStateToProps)(MovieIndex)
