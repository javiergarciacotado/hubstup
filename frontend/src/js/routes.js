import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import StartupsPage from '../components/startup/StartupsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="startups" component={StartupsPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
