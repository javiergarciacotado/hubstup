import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import NotFound from '../components/404';

export default(
  <Route path="/" name="app" component={App}>
    <Route path="*" component={NotFound} />
  </Route>
);
