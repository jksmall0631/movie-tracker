import {combineReducers} from 'redux';
import movieReducer from './reducer-movie';
import userSignInReducer from './reducer-userSignIn';


const allReducers = combineReducers({
  movieReducer,
  userSignInReducer,
})

export default allReducers;
