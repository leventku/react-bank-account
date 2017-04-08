import { combineReducers } from 'redux';

import banksReducer from './banksReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  banks: banksReducer
});

export default rootReducer;
