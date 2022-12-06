import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profileReducer,
});

export default rootReducer;
