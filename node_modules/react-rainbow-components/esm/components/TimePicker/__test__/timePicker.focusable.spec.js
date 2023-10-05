import React from 'react';
import { mount } from 'enzyme';
import TimePicker from '..';
describe('<TimePicker/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(TimePicker, {
      label: "TimePicker Label"
    }));
    expect(component).toBeFocusable();
  });
});