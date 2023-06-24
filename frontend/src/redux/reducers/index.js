import { combineReducers } from 'redux';
import superAdminReducer from './superAdminReducer';
import categories from './categories';

const allReducers = combineReducers({
  superAdminReducer,
  categories,
})

export default allReducers;
