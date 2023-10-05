import React from 'react';
import { mount } from 'enzyme';
import Chips from '../chips';
import { StyledChip } from '../styled';
describe('<Chips />', function () {
  it('should not render any chip', function () {
    var component = mount(React.createElement(Chips, null));
    expect(component.find(StyledChip).length).toBe(0);
  });
  it('should render only one chip', function () {
    var value = {
      label: 'Test',
      name: 'test'
    };
    var component = mount(React.createElement(Chips, {
      value: value
    }));
    expect(component.find(StyledChip).length).toBe(1);
  });
  it('should render the right amount of chips', function () {
    var value = [{
      label: 'Option 1',
      name: 'option-1'
    }, {
      label: 'Option 2',
      name: 'option-2'
    }, {
      label: 'Option 3',
      name: 'option-3'
    }];
    var component = mount(React.createElement(Chips, {
      value: value
    }));
    expect(component.find(StyledChip).length).toBe(3);
  });
});