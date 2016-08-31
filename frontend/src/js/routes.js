import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import StartupsPage from '../components/startup/StartupsPage';
import ComingSoon from '../components/ComingSoon';
import ManageStartupPage from '../components/startup/ManageStartupPage';
import NotFoundPage from '../components/404';
import SignIn from '../components/auth/Signin';
import SignUp from '../components/auth/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="startups" component={StartupsPage} />
    <Route path="startup" component={ManageStartupPage} />
    <Route path="startup/:id" component={ManageStartupPage} />
    <Route path="about" component={AboutPage} />
    <Route path="comingsoon" component={ComingSoon} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="*" component={NotFoundPage}/>

  </Route>
);
