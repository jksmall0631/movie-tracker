import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'
import { combineReducers } from 'redux';

import allReducers from './index.js'
import movieReducer from './reducer-movie'
import userSignInReducer from './reducer-userSignIn'
import allMoviesReducer from './reducer-allMovies'
import movieIndexReducer from './reducer-movieIndex'

describe('userSignInReducer', () => {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = userSignInReducer(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return state with a new user property upon user login', ()=>{
    const defaultState = userSignInReducer(undefined, {})
    const loginAction = {
      type: 'USER_LOGIN', action: {
        id: 1,
        name: 'Taylor',
        password: 'password',
        email: 'tman2272@aol.com'
      }
    }
    const testState = userSignInReducer(defaultState, loginAction)
    const newUserName = Object.values(testState.user)[1].name
    expect(defaultState.user).to.not.exist
    expect(testState.user).to.exist
    expect(newUserName).to.equal('Taylor')
  })

  it('should return state with a new fav prop upon adding a fav', ()=>{
    const defaultState = userSignInReducer(undefined, {})
    const addFavAction = {
      type: 'ADD_FAVS', action: {
          id: 70,
          movie_id: 346685,
          user_id: 77,
          title: "The Girl on the Train",
          poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
          release_date: "2016-10-05",
          vote_average: "6",
          overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }
    }
    const testState = userSignInReducer(defaultState, addFavAction)
    const newFaveTitle = Object.values(testState.fav)[1].title
    expect(defaultState.fav).to.not.exist
    expect(testState.fav).to.exist
    expect(newFaveTitle).to.equal('The Girl on the Train')
  })
})

describe('movieReducer', () => {
  it('should be a function', () => {
      assert.isFunction(movieReducer)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = movieReducer(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return state with a new movie property upon adding a movie', ()=>{
    const defaultState = movieReducer(undefined, {})
    const addMovieAction = {
      type: 'ADD_MOVIES', movies: {
          id: 70,
          movie_id: 346685,
          user_id: 77,
          title: "The Girl on the Train",
          poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
          release_date: "2016-10-05",
          vote_average: "6",
          overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }
    }
    const testState = movieReducer(defaultState, addMovieAction)
    const newMovieTitle = Object.values(testState.movies)[3]
    expect(defaultState.movies).to.not.exist
    expect(testState.movies).to.exist
    expect(newMovieTitle).to.equal('The Girl on the Train')
  })

  it('should return a new movie state that assigns a toggle property upon TOGGLE_FAVS', ()=>{
    const defaultState = movieReducer(undefined, {})
    const toggleFavAction = {
      type: 'TOGGLE_FAVS', movies: {
          id: 70,
          movie_id: 346685,
          user_id: 77,
          title: "The Girl on the Train",
          poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
          release_date: "2016-10-05",
          vote_average: "6",
          overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }
    }
    const testState = movieReducer(defaultState, toggleFavAction)
    const toggleMovieTitle = testState.toggle.movies.title
    expect(defaultState.toggle).to.not.exist
    expect(testState.toggle).to.exist
    expect(toggleMovieTitle).to.equal('The Girl on the Train')
  })
})

describe('allMoviesReducer', () => {
  it('should be a function', () => {
      assert.isFunction(allMoviesReducer)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = allMoviesReducer(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return state with a new movie upon adding a movie', ()=>{
    const defaultState = allMoviesReducer(undefined, {})
    const favAction = {
      type: 'FINAL_FAVS', finalFaves: [ {
          id: 70,
          movie_id: 346685,
          user_id: 77,
          title: "The Girl on the Train",
          poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
          release_date: "2016-10-05",
          vote_average: "6",
          overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }, {
        id: 69,
        movie_id: 330459,
        user_id: 77,
        title: "Rogue One: A Star Wars Story",
        poster_path: "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
        release_date: "2016-12-14",
        vote_average: "7.2",
        overview: "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
      }
    ]
    }
    const testState = allMoviesReducer(defaultState, favAction)
    const faveArray = Object.values(testState.finalFaves)
    expect(defaultState.finalFaves).to.not.exist
    expect(testState.finalFaves).to.exist
    expect(faveArray).to.have.length(2)
  })
})

describe('movieIndexReducer', () => {
  it('should be a function', () => {
      assert.isFunction(movieIndexReducer)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = movieIndexReducer(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return a new movie object upon adding a new favorite', () => {
    const defaultState = movieIndexReducer(undefined, {})
    const newFavAction = {
      type: 'NEW_FAV', newFav: {
        id: 70,
        movie_id: 346685,
        user_id: 77,
        title: "The Girl on the Train",
        poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
        release_date: "2016-10-05",
        vote_average: "6",
        overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }
    }
    const testState = movieIndexReducer(defaultState, newFavAction)
    expect(defaultState.new).to.not.exist
    expect(testState.new).to.exist
  })

  it('should return a new movie object upon adding a delete favorite', () => {
    const defaultState = movieIndexReducer(undefined, {})
    const deleteFavAction = {
      type: 'DELETE_FAV', delFav: {
        id: 70,
        movie_id: 346685,
        user_id: 77,
        title: "The Girl on the Train",
        poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
        release_date: "2016-10-05",
        vote_average: "6",
        overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      }
    }
    const testState = movieIndexReducer(defaultState, deleteFavAction)
    expect(defaultState.del).to.not.exist
    expect(testState.del).to.exist
  })

})

describe('allReducers', () => {
  it('should be a function', () => {
    assert.isFunction(userSignInReducer)
  })

})
