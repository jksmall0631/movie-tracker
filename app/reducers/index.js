import {combineReducers} from 'redux';
import appReducer from './reducer-app';

const allReducers = combineReducers({
  appReducer,
})

export default allReducers;
