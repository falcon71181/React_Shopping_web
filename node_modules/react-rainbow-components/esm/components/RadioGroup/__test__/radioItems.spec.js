import React from 'react';
import { mount } from 'enzyme';
import RadioItems from '../radioItems';
import StyledItemDescription from '../styled/itemDescription';
describe('<RadioItems />', function () {
  it('should return the 3 radios when 3 options are passed', function () {
    var options = [{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }, {
      value: 'user',
      label: 'User'
    }, {
      value: 'anonymous',
      label: 'Anonymous'
    }];
    var component = mount(React.createElement(RadioItems, {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to the Radio component', function () {
    var option = [{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }];
    var component = mount(React.createElement(RadioItems, {
      options: option,
      name: "name-1",
      ariaDescribedby: "error-1",
      onChange: function onChange() {}
    }));
    expect(component.find('Radio').props()).toEqual(expect.objectContaining({
      value: option[0].value,
      label: option[0].label,
      disabled: option[0].disabled,
      ariaDescribedby: 'error-1',
      name: 'name-1',
      onChange: expect.any(Function),
      checked: false,
      error: null
    }));
  });
  it('should render the description', function () {
    var options = [{
      value: 'admin',
      label: 'Admin',
      disabled: true,
      description: 'Admin user'
    }, {
      value: 'user',
      label: 'User',
      description: 'Regular user'
    }, {
      value: 'anonymous',
      label: 'Anonymous',
      description: 'Anonymous user'
    }];
    var component = mount(React.createElement(RadioItems, {
      name: "items",
      options: options
    }));
    expect(component.find(StyledItemDescription).length).toBe(3);
    expect(component.find(StyledItemDescription).first().text()).toBe('Admin user');
  });
});