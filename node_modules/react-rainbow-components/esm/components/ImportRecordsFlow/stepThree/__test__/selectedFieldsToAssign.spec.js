import React from 'react';
import { mount } from 'enzyme';
import SelectedFieldsToAssign from '../selectedFieldsToAssign';
var values = ['test-1', 'test-2'];
describe('<SelectedFieldsToAssign />', function () {
  it('should render the right amount of chip elements', function () {
    var component = mount(React.createElement(SelectedFieldsToAssign, {
      values: values
    }));
    expect(component.find('Chip').length).toBe(2);
  });
  it('should trigger delete callback when Chip delete button is clicked', function () {
    var onDeleteFn = jest.fn();
    var component = mount(React.createElement(SelectedFieldsToAssign, {
      onDelete: onDeleteFn,
      values: values
    }));
    component.find('button').at(0).simulate('click');
    expect(onDeleteFn).toHaveBeenCalledWith('test-1');
  });
  it('should have right label', function () {
    var component = mount(React.createElement(SelectedFieldsToAssign, {
      values: values
    }));
    var label = component.find('Chip').at(1).prop('label');
    expect(label).toBe('test-2');
  });
});