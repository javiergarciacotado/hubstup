import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return(
    <header className="navbar navbar-inverse white" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">HubStup</Link>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link to="/">
                Page 1
                <i className="fa fa-chevron-down" />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/">Page 1.1</Link></li>
                <li><Link to="/">Page 1.2</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                Page 2
                <i className="fa fa-chevron-down" />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/">Page 2.1</Link></li>
                <li><Link to="/">Page 2.2</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                Blog
                <i className="fa fa-chevron-down"></i>
              </Link>
            </li>
            <li>
              <Link to="/signin" className="navbar-link">Sign in</Link>
            </li>
            <li>
              <Link to="/signup" className="signup visible-md visible-lg">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
