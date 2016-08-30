import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import App from '../components/App';
import configureStore from '../store/configureStore';
import {loadStartups} from '../actions/startupActions';
import {loadIndustries} from '../actions/industryActions';

import '../scss/main.scss';
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadStartups());
store.dispatch(loadIndustries());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
