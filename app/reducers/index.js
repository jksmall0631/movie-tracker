import {combineReducers} from 'redux';
import movieReducer from './reducer-movie';
import userSignInReducer from './reducer-userSignIn';
import allMoviesReducer from './reducer-allMovies';


const allReducers = combineReducers({
  movieReducer,
  userSignInReducer,
  allMoviesReducer,
})

export default allReducers;
