import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions';
import { favorites } from '../actions';
import MovieIndex from '../components/MovieIndex';
import App from '../components/App'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleFavorites: (data) => {
      dispatch(favorites(data))
    }
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
