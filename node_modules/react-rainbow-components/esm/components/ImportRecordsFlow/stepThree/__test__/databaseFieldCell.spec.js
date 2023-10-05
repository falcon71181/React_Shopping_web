import React from 'react';
import { mount } from 'enzyme';
import DatabaseFieldCell from '../databaseFieldCell';
describe('<DatabaseFieldCell />', function () {
  it('should show a required ui element when field is required', function () {
    var props = {
      value: 'name',
      row: {
        required: true
      }
    };
    var component = mount(React.createElement(DatabaseFieldCell, props));
    expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
  });
  it('should render text value properly', function () {
    var props = {
      value: 'name',
      row: {
        required: false
      }
    };
    var component = mount(React.createElement(DatabaseFieldCell, props));
    expect(component.text()).toBe(props.value);
  });
});