import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from '../components/App';
import '../scss/main.scss';

import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';

render(<Router history={browserHistory} routes={routes} />, document.getElementById("app"));
