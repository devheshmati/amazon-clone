import { combineReducers } from 'redux';
import superAdminReducer from './superAdminReducer';

const allReducers = combineReducers({
  superAdminReducer,
})

export default allReducers;
