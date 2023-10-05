import React from 'react';
import { mount, shallow } from 'enzyme';
import Chip from '..';
describe('<Chip/>', function () {
  it('should set the label passed', function () {
    var component = mount(React.createElement(Chip, {
      label: "testing Chip"
    }));
    expect(component.text()).toBe('testing Chip');
  });
  it('should fire an event when the close button is clicked', function () {
    var onDeleteMockFn = jest.fn();
    var component = mount(React.createElement(Chip, {
      onDelete: onDeleteMockFn
    }));
    component.find('button').simulate('click');
    expect(onDeleteMockFn).toHaveBeenCalledWith(expect.any(Object));
  });
  it('should set isTrue in RenderIf to true when onDelete is passed', function () {
    var component = shallow(React.createElement(Chip, {
      onDelete: function onDelete() {}
    }));
    expect(component.find('RenderIf').prop('isTrue')).toBeTruthy();
  });
  it(' should set isTrue in RenderIf to false when onDelete is not passed', function () {
    var component = mount(React.createElement(Chip, {
      label: "testing Chip"
    }));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
});