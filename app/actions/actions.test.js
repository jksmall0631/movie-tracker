import * as actions from './index.js'
import stubMovie from '../components/testing-stubs/stub-movie'

describe('actions', () => {
  it('should create an action to add a user', () => {
    const data = {
      id: 1,
      name: 'Taylor',
      password: 'password',
      email: 'tman2272@aol.com'
    }
    const expectedReturn = {
      type: 'USER_LOGIN',
      data: {
        id: 1,
        name: 'Taylor',
        password: 'password',
        email: 'tman2272@aol.com'
      }
    }
    expect(actions.userSignIn(data)).toEqual(expectedReturn)
  })

  it('should create an action to add a movie', () => {
    const expectedReturn = {
      type: 'ADD_MOVIES',
      movies: stubMovie
    }
    expect(actions.addMovies(stubMovie)).toEqual(expectedReturn)
  })

  it('should create an action to add a favorite movie', () => {
    const expectedReturn = {
      type: 'ADD_FAVS',
      data: stubMovie
    }
    expect(actions.favorites(stubMovie)).toEqual(expectedReturn)
  })

  it('should create an action that keeps favs true', () => {
    const expectedReturn = {
      type: 'TOGGLE_FAVS',
      favs: true
    }
    expect(actions.toggleFavs()).toEqual(expectedReturn)
  })

  it('should create an action that keeps favs false', () => {
    const expectedReturn = {
      type: 'TOGGLE_FAVS',
      favs: false
    }
    expect(actions.falseFavs()).toEqual(expectedReturn)
  })

  it('should create an action to add a new favorite', () => {
    const expectedReturn = {
      type: 'NEW_FAV',
      newFav: stubMovie
    }
    expect(actions.newFavorite(stubMovie)).toEqual(expectedReturn)
  })

  it('should create an action to delete a favorite', () => {
    const expectedReturn = {
      type: 'DELETE_FAV',
      delFav: stubMovie
    }
    expect(actions.deleteFavorite(stubMovie)).toEqual(expectedReturn)
  })

  it('should create an action to return the finalFaves', () => {
    const expectedReturn = {
      type: 'FINAL_FAVS',
      finalFaves: stubMovie
    }
    expect(actions.finalFaves(stubMovie)).toEqual(expectedReturn)
  })
})
