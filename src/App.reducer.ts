import {combineReducers} from 'redux';
import {UsersReducers} from './services/users'; // import Reducers

const rootReducer = combineReducers({
  UsersReducer: UsersReducers, // Add reducers
});

export default rootReducer;
