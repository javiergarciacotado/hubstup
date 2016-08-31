import expect from 'expect';
import React from 'react';

import {mount, shallow} from 'enzyme';
// with brackets we import the raw unconnected component. Without them we import the default connected component
import {ManageStartupPage} from '../../../src/components/startup/ManageStartupPage.js';

describe ('Manage Startup Page', () => {
  it ('sets error message when trying to save my empty name', () => {
    const props = {
      industries: [],
      startup: {
        id: '',
        name: '',
        url: '',
        watchHref: '',
        keywords: [],
        industryId: ''
      },
      actions: {
        saveStartup: () => {
          return Promise.resolve();
        }
      }
    };

    //import the raw & unconnected version --> add "export" to ManageStartupPage component,
    const wrapper = mount(<ManageStartupPage {...props} /> );
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.name).toBe('Name must be at least 3 characters');
  });
});
