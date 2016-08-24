//This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {

  componentDidMount() {
    $(function() {
     let images = ['glenfinnan.jpg', 'otters.jpg', 'quiraing.jpg', 'quiraing2.jpg',
       'skye.jpg', 'skye2.jpg', 'stoer.jpg', 'storr.jpg'];
     //$('#background').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ')'});
     let backImage = require('../images/storr.jpg');
     $('#background').css({'background-image': 'url(' + backImage + ')'});
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <Header />
        </div>
        <div id="background"></div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
      );
    }
  }

  App.propTypes = {
    children: PropTypes.object.isRequired
  };

  export default App;
