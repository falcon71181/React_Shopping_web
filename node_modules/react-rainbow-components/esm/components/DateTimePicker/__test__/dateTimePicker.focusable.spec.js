import React from 'react';
import { mount } from 'enzyme';
import DateTimePicker from '..';
describe('<DateTimePicker/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(DateTimePicker, {
      label: "DateTimePicker Label"
    }));
    expect(component).toBeFocusable();
  });
});