import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//import data files
import Articles from './data/Articles.js';

// create object for the default data
const defaultState = {
  Articles,
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(hashHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index.js').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
