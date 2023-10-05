import React from 'react';
import { mount } from 'enzyme';
import ButtonGroup from '../index';
import Button from '../../Button';
describe('<ButtonGroup/>', function () {
  it('should be accessible, the div element should have role="group"', function () {
    var component = mount(React.createElement(ButtonGroup, null, React.createElement(Button, {
      label: "Refresh"
    }), React.createElement(Button, {
      label: "Edit"
    }), React.createElement(Button, {
      label: "Save"
    })));
    expect(component.find('div[role="group"]').exists()).toBe(true);
  });
  it('should render the amount of children passed', function () {
    var component = mount(React.createElement(ButtonGroup, null, React.createElement(Button, {
      label: "Refresh"
    }), React.createElement(Button, {
      label: "Edit"
    }), React.createElement(Button, {
      label: "Save"
    })));
    expect(component.prop('children').length).toBe(3);
  });
});