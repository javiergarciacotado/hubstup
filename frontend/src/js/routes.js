import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import NotFound from '../components/404';

export default(
  <Route path="/" name="app" component={App}>
    <Route path="/signin" name="signin" component={Signin} />
    <Route path="/signup" name="signup" component={Signup} />
    <Route path="*" name="not-found" component={NotFound} />
  </Route>
);
