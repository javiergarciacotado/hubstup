import React from 'react';
import { Link } from 'react-router';

const Signin = () => {
  return (
    <div id="signup" className="jumbotron clear left_align">
      <div className="container">
        <div className="row header">
          <div className="col-md-12">
            <h4>Sign in to your account.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="wrapper clearfix">
              <div className="formy">
                <div className="row">
                  <div className="col-md-12">
                    <form role="form">
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"/>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/> Remember me
                        </label>
                      </div>
                      <div className="submit">
                        <Link to="/signup" className="button-clear">
                          <span>Sign in to my account</span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="already-account">
              Don't have an account? <br />
              <Link to="/signup">Create one here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
