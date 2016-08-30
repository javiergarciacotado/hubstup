import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as startupActions from '../../actions/startupActions';
import StartupForm from './StartupForm';

class ManageStartupPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      startup: Object.assign({}, this.props.startup),
      errors: {},
      saving: false
    };

    this.updateStartupState = this.updateStartupState.bind(this);
    this.saveStartup = this.saveStartup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.startup.id != nextProps.startup.id) {
      //Necessary to populate form when existing startup is loaded directly
      this.setState({startup: Object.assign({}, nextProps.startup)});
    }
  }

  updateStartupState(event) {
    const field = event.target.name;
    let startup = this.state.startup;
    startup[field] = event.target.value;

    return this.setState({startup: startup});
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Startup saved!');
    this.context.router.push('/startups');
  }

  saveStartup(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveStartup(this.state.startup)
      .then(() => this.redirect())
      .catch( error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  render (){
    return (
      <div className="jumbotron">
        <StartupForm
          allIndustries={this.props.industries}
          startup={this.state.startup}
          errors={this.state.errors}
          onChange={this.updateStartupState}
          onSave={this.saveStartup}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageStartupPage.propTypes = {
  startup: PropTypes.object.isRequired,
  industries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageStartupPage.contextTypes = {
  router: PropTypes.object
};

function getStartupById(startups, id) {
  const startup = startups.filter(startup => startup.id == id);
  if (startup) {
    return startup[0]; //filter returns an array --> grab the first item
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const startupId = ownProps.params.id; //from the path `/startup/:id` in routes.js

  let startup = {
    id: '',
    name: '',
    url: '',
    watchHref: '',
    keywords: [],
    industryId: ''
  };

  if (startupId && state.startups !== null && state.startups.length > 0) {
    startup = getStartupById(state.startups, startupId);
  }

  const industriesFormattedForDropdown = state.industries.map(industry => {
    return {
      value: industry.id,
      text: industry.name
    };
  });

  return {
    startup: startup,
    industries: industriesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(startupActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageStartupPage);
