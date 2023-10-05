import React from 'react';
import { mount } from 'enzyme';
import copyFn from 'clipboard-copy';
import ButtonIcon from '../../ButtonIcon';
import SelectedValue from '../selectedValue';
import StyledSelectedIconContainer from '../styled/selectedIconContainer';
jest.mock('clipboard-copy');
var value = {
  label: 'this is a test'
};
var valueWithIcon = {
  label: 'this is a test',
  icon: 'ok'
};
describe('<SelectedValue />', function () {
  it('should render an input container', function () {
    var component = mount(React.createElement(SelectedValue, {
      value: valueWithIcon
    }));
    expect(component.find('input').prop('type')).toBe('text');
    expect(component.find('input').prop('value')).toBe('this is a test');
  });
  it('should set the id passed as the id prop in the input element', function () {
    var component = mount(React.createElement(SelectedValue, {
      id: "label-123"
    }));
    expect(component.find('input').prop('id')).toBe('label-123');
  });
  it('should not render an icon container', function () {
    var component = mount(React.createElement(SelectedValue, {
      value: value
    }));
    expect(component.find(StyledSelectedIconContainer).exists()).toBe(false);
  });
  it('should render an icon container', function () {
    var component = mount(React.createElement(SelectedValue, {
      value: valueWithIcon
    }));
    expect(component.find(StyledSelectedIconContainer).exists()).toBe(true);
  });
  it('should render a close button', function () {
    var component = mount(React.createElement(SelectedValue, {
      onClearValue: function onClearValue() {}
    }));
    expect(component.find(ButtonIcon).exists()).toBe(true);
  });
  it('should fire an event when the close button is clicked', function () {
    var onClearMockFn = jest.fn();
    var component = mount(React.createElement(SelectedValue, {
      onClearValue: onClearMockFn
    }));
    component.find(ButtonIcon).simulate('click');
    expect(onClearMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not render the close button when readOnly is passed', function () {
    var component = mount(React.createElement(SelectedValue, {
      readOnly: true
    }));
    expect(component.find(ButtonIcon).exists()).toBe(false);
  });
  it('should not render the close button when disabled is passed', function () {
    var component = mount(React.createElement(SelectedValue, {
      disabled: true
    }));
    expect(component.find(ButtonIcon).exists()).toBe(false);
  });
  it('should copy value label to clipboard when input gets focus', function () {
    copyFn.mockReset();
    var component = mount(React.createElement(SelectedValue, {
      value: value
    }));
    component.find('input').simulate('focus');
    expect(copyFn).toHaveBeenCalledWith(value.label);
  });
});