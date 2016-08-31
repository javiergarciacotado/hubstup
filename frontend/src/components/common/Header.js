import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
//import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
  /*
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
            <li className="active"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/startups" activeClassName="active">Startups</Link></li>
          </ul>
          {loading && <LoadingDots interval = {100} dots={20} />}
        </div>
      </div>
    </div>
  );
  */
  return(
    <header className="navbar navbar-default" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/" className="navbar-brand">HubStup</IndexLink>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link to="/startups">
                Startups Directory
                <i className="fa fa-chevron-down" />
              </Link>
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

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
