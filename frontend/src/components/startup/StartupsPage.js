import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as startupActions from '../../actions/startupActions';
import StartupList from './StartupList';

class StartupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddStartupPage = this.redirectToAddStartupPage.bind(this);
  }

  redirectToAddStartupPage() {
    browserHistory.push('startup');
  }

  render() {
    const {startups} = this.props;
    return (
      <div className="jumbotron">
        <div className="panel panel-default">
          <div className="panel-heading"><h2>Startups</h2></div>
          <input
            type="submit"
            value="Add Startup"
            className="btn btn-primary"
            onClick={this.redirectToAddStartupPage} />
          <StartupList startups = {startups} />
        </div>
      </div>
    );
  }
}

StartupsPage.propTypes = {
  startups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    startups: state.startups //state.startups name defined on the rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createStartup: startup => dispatch(startupActions.createStartup(startup))
    actions: bindActionCreators(startupActions, dispatch)
  };
}

/*
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps); //returns a function
export default connectedStateAndProps(StartupsPage);
*/
export default connect(mapStateToProps, mapDispatchToProps)(StartupsPage);
