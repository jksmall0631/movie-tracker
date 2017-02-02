import {combineReducers} from 'redux';
import appReducer from './reducer-app';
import userSignInReducer from './reducer-userSignIn';


const allReducers = combineReducers({
  appReducer,
  userSignInReducer,
})

export default allReducers;
