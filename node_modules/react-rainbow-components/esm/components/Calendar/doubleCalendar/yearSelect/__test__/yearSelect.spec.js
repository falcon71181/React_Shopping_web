import React from 'react';
import { mount } from 'enzyme';
import YearSelect from '..';
describe('YearSelect', function () {
  it('should set an id in the select element', function () {
    var component = mount(React.createElement(YearSelect, null));
    expect(component.find('select').prop('id')).toMatch(/select/);
  });
  it('should set the year passed as value in the select element', function () {
    var component = mount(React.createElement(YearSelect, {
      currentYear: 2019
    }));
    expect(component.find('select').prop('value')).toBe(2019);
  });
  it('should fire an event when the user selects a year', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(YearSelect, {
      currentYear: 2019,
      onYearChange: onChangeFn
    }));
    component.find('select').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
});