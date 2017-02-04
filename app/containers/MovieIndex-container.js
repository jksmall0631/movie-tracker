import React from 'react';
import { connect } from 'react-redux';
import { toggleFavs } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchToFavs: () => {
      dispatch(toggleFavs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
