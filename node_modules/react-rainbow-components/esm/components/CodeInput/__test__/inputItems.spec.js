import React from 'react';
import { mount } from 'enzyme';
import InputItems from '../inputItems';
import InputItem from '../inputItem';
describe('<InputItems />', function () {
  it('should have 4 InputItem elements rendered when value array has a length of 4', function () {
    var component = mount(React.createElement(InputItems, {
      value: ['', '', '', '']
    }));
    expect(component.find(InputItem).length).toBe(4);
  });
  it('should have isActive only on the focusedIndex input', function () {
    var component = mount(React.createElement(InputItems, {
      value: ['1', '', '', ''],
      focusedIndex: 1
    }));
    expect(component.find(InputItem).at(1).prop('isActive')).toBe(true);
  });
  it('should have tabIndex passed only to the focusedIndex input', function () {
    var tabIndex = 3;
    var component = mount(React.createElement(InputItems, {
      value: ['1', '', '', ''],
      focusedIndex: 1,
      tabIndex: tabIndex
    }));
    expect(component.find(InputItem).at(1).prop('tabIndex')).toBe(3);
  });
  it('should have the initial values properly assigned to each input', function () {
    var values = ['1', '2', '3', '4'];
    var component = mount(React.createElement(InputItems, {
      value: values
    }));
    values.forEach(function (value, index) {
      expect(component.find(InputItem).at(index).prop('value')).toBe(value);
    });
  });
  it('should have ref passed only to the focusedIndex input', function () {
    var ref = React.createRef();
    var component = mount(React.createElement(InputItems, {
      value: ['1', '', '', ''],
      focusedIndex: 1,
      ref: ref
    }));
    expect(component.find(InputItem).at(0).getDOMNode()).not.toEqual(ref.current);
    expect(component.find(InputItem).at(1).getDOMNode()).toEqual(ref.current);
  });
});