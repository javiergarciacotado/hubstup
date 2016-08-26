import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as startupActions from '../../actions/startupActions';
import StartupList from './StartupList';

class StartupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  startupRow(startup, index){
    return <div key={index}>{startup.name} - {startup.url}</div>;
  }

  render() {
    const {startups} = this.props;
    return (
      <div className="jumbotron">
        <div className="panel panel-default">
          <div className="panel-heading"><h2>Startups</h2></div>
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
