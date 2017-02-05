import React from 'react';
import { connect } from 'react-redux';
import { newFavorite } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    newFav: (movie) => {
      dispatch(newFavorite(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
