import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as startupActions from '../../actions/startupActions';

class StartupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      startup: {
        name: "",
        url: ""
      }
    };
    //REACT does not automatically bind any ES6 classes, so without the following
    //lines, "this" points to input instead of StartupsPage Component
    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const startup = this.state.startup;
    startup.name = event.target.value;
    this.setState({startup: startup});
  }

  onUrlChange(event) {
    const startup = this.state.startup;
    startup.url = event.target.value;
    this.setState({startup: startup});
  }

  onClickSave() {
    this.props.actions.createStartup(this.state.startup);
  }

  startupRow(startup, index){
    return <div key={index}>{startup.name} - {startup.url}</div>;
  }

  render() {
    return (
      <div>
        <h1>Startups</h1>
        {this.props.startups.map(this.startupRow)}
        <h2>Add Startup</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.startup.name} />
        <input
          type="text"
          onChange={this.onUrlChange}
          value={this.state.startup.url} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
