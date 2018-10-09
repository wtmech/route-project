import { combineReducers } from 'redux';
import trainReducer from './trainReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  errors: errorReducer,
  route: trainReducer
})