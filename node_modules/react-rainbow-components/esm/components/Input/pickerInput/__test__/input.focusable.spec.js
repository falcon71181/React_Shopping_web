import React from 'react';
import { mount } from 'enzyme';
import Input from '..';
describe('<PickerInput/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Input, {
      label: "Input Label"
    }));
    expect(component).toBeFocusable();
  });
});