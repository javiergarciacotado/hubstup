//This component handles the App template used on every page
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component {

  componentDidMount() {
    $(function() {
      let images = ['glenfinnan.jpg', 'otters.jpg', 'quiraing.jpg', 'quiraing2.jpg',
      'skye.jpg', 'skye2.jpg', 'stoer.jpg', 'storr.jpg'];
      const backImage = require('../images/'+ images[Math.floor(Math.random() * images.length)]);
      $('#background').css({'background-image': 'url(' + backImage + ')'});
    });
  }

  render() {
    /*
    return (
      <div className="container-fluid">
        <div className="header">
          <Header loading={this.props.loading} />
        </div>
        <div id="background"></div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
    */
    return (
      <div className="container-fluid">
        <div className="header">
          <Header loading={this.props.loading} />
        </div>
        <div className="hero">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
