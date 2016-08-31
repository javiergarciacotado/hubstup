import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
  return (
    <div id="signup" className="jumbotron clear left_align">
      <div className="container">
        <div className="row header">
          <div className="col-md-12">
            <h4>Set up your new account today.</h4>
            <p>
              30-day money-back guarantee that starts after your first payment.
              xDDDDDDDDD
            </p>
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
                        <label htmlFor="name">Your name</label>
                        <input type="text" className="form-control" id="name"/>
                      </div>
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
                          <input type="checkbox"/> You have read & agree to the
                          <Link to="/">Terms of service</Link>.
                        </label>
                      </div>
                      <div className="submit">
                        <Link to="/" className="button-clear">
                          <span>Create my account</span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="already-account">
              Already have an account?
              <Link to="/signin">Sign in here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
