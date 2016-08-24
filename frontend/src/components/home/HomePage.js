import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>Up in the sky, look:</h2>
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
  }
}

export default HomePage;
