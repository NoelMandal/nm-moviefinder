import { combineReducers } from 'redux';

import SearchReducer from './reducer_Movie_Search';

const rootReducer = combineReducers({
    search: SearchReducer
  });

export default rootReducer;
