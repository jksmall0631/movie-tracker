import {combineReducers} from 'redux';
import movieReducer from './reducer-movie';
import userSignInReducer from './reducer-userSignIn';
import movieIndexReducer from './reducer-movieIndex';


const allReducers = combineReducers({
  movieReducer,
  userSignInReducer,
  movieIndexReducer,
})

export default allReducers;
