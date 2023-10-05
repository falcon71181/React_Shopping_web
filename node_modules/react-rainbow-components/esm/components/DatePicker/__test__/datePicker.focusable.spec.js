import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '..';
describe('<DatePicker/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(DatePicker, {
      label: "DatePicker Label"
    }));
    expect(component).toBeFocusable();
  });
});