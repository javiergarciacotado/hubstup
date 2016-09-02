import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    /*
    return (
      <div id="hero">
        <h1 className="hero-text animated fadeInDown">Up in the sky, look:</h1>
        <h3> It's a bird. It's a plane. It's <strike>Superman</strike> a Startup!</h3>
        <div className="lead">
          <div className="row">
            <div className="col-lg-12">
              <div className="input-group">
                <div className="input-group-btn">
                  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Startup Name <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Startup Name</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    */

    return (
      <div id="hero">
        <div className="container">
          <h1 className="hero-text animated fadeInDown">
            Up in the sky, look:
          </h1>
          <p className="sub-text animated fadeInDown">
            It's a bird. It's a plane. It's <strike>Superman</strike> a Startup!
          </p>
          <div claclassNamess="container">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Look for a startup, a technology, an industry..." />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Search</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

  }
}

export default HomePage;
