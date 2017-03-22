import React from 'react';
import { render } from 'react-dom';
import css from './styleSheet/styles.css';

// import components
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import PoetryHome from './components/PoetryHome.jsx';
import TechHome from './components/TechHome.jsx';
import PersonalHome from './components/PersonalHome.jsx';
import Pride from './components/Pride.jsx';
import ATSUTGB from './components/ATSUTGB.jsx';
import UnderClaws from './components/UnderClaws.jsx';

// import react router deps
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/poetry' component={PoetryHome}></Route>
        <Route path='/technology' component={TechHome}></Route>
        <Route path='/personal thoughts' component={PersonalHome}></Route>
        <Route path='/personal/pride' component={Pride}></Route>
        <Route path='/technology/ATSUTGB' component={ATSUTGB}></Route>
        <Route path='/poetry/TEOIC' component={UnderClaws}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
