import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps)(MovieIndex)
