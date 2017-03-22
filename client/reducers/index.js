import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Articles from './Articles.js';

const rootReducer = combineReducers({Articles, routing: routerReducer});

export default rootReducer;
