import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import allReducers from './index.js'
import movieReducer from './reducer-movie'
import userSignInReducer from './reducer-userSignIn'

import fakeState from '../components/testing-stubs/state-stub'

describe('userSignInReducer', () => {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = userSignInReducer(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return state with a new user upon user login', ()=>{
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
    expect(defaultState).to.not.equal.true
    expect(testState).to.equal.true
    expect(newUserName).to.equal('Taylor')
  })

  it('should return state with a new fav upon adding a fav', ()=>{
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
    expect(defaultState).to.not.equal.true
    expect(testState).to.equal.true
    expect(newFaveTitle).to.equal('The Girl on the Train')
  })

})

describe('movieReducer', () => {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })


})

  describe('allMoviesReducer', () => {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })


})

  describe('movieIndexReducer', () => {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })


})
