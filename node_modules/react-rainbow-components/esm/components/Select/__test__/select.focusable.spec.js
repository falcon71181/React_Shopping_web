import React from 'react';
import { mount } from 'enzyme';
import Select from '..';
describe('<Select/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Select, {
      label: "Select Label"
    }));
    expect(component).toBeFocusable();
  });
});