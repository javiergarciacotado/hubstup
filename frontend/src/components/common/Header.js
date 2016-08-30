import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
//import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
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
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
