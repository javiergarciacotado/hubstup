import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <IndexLink to="/" className="navbar-brand">HubStup!</IndexLink>
        </div>

        <div className="collapse navbar-collapse" id="js-navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
            <li><Link activeClassName="active" to="/about">About</Link></li>
            <li><Link activeClassName="active" to="/startups">Startups</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
