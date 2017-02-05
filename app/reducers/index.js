import {combineReducers} from 'redux';
import movieReducer from './reducer-movie';
import userSignInReducer from './reducer-userSignIn';
import movieIndexReducer from './reducer-movieIndex';
import allMoviesReducer from './reducer-allMovies';


const allReducers = combineReducers({
  movieReducer,
  userSignInReducer,
  movieIndexReducer,
  allMoviesReducer,
})

export default allReducers;
