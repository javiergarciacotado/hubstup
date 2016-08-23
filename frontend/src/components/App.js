import React, {PropTypes} from 'react';
//import Header from './Header';
//import { Link, IndexLink } from 'react-router';
import flipclock from '../../node_modules/flipclock/compiled/flipclock.min';

class App extends React.Component {

  componentDidMount() {
    $(function () {

      let clock;
      let currentDate = new Date();
      let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + 48);
      let diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
      //clock = $('#clock').FlipClock(diff).then(() => {countdown:true;});
      clock = $('#clock').FlipClock(diff, {
        countdown:true
      });
    });
  }

  render() {
    return (
      <div id="coming-soon" className="dark">
        <div className="container">
          <div className="container">
            <div className="row info">
              <div className="col-md-12">
                <h1><a href="#">HubStup</a></h1>
                <h3>We're launching very soon.</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div id="countdown">
                  <div id="clock" className="flip-clock-wrapper"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <form className="form-inline" role="form">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2"
                           placeholder="Enter your email"/>
                  </div>
                  <a href="index.html" className="button">Notify me</a>
                </form>
              </div>
            </div>

            <div className="row social">
              <div className="col-md-12">
                <a className="ion" href="#"><span className="ion-social-twitter"></span></a>
                <div className="tm">Follow up @hubstup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
