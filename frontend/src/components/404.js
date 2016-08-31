import React from 'react';
import {Link} from 'react-router';

const NotFound = () => {
  return (
    <div className="jumbotron">
      <div className="info">
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>

        <p className="go-back">
          Go back
          or continue to our <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
