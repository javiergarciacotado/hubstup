import expect from 'expect';
import React from 'react';

import {mount, shallow} from 'enzyme';

import StartupForm from '../../../src/components/startup/StartupForm.js';

function setup(saving) {
  let props = {
    startup: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<StartupForm {...props} />);
}

describe('StartupForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Startup');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});

/* Testing React with React Test Utils */
/*
import TestUtils from 'react-addons-test-utils';

function setup(saving) {
  let props = {
    startup: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<StartupForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('StartupForm via React Test Utils', () => {
  it('renders a form and a h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children; //first element of the children
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[6];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving"', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[6];
    expect(submitButton.props.value).toBe('Saving...');
  });
});

*/
