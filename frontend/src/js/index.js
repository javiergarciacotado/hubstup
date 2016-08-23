import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from '../components/App';

/* eslint-disable */
import main from '../scss/_main.scss';
/* eslint-enable */

render(<Router history={browserHistory} routes={routes} />, document.getElementById("app"));
