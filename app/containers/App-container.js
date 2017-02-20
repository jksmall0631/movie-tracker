import { connect } from 'react-redux';
import React, { Component } from 'react'
import { addMovies } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPI: (movies) => {
      dispatch(addMovies(movies))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
