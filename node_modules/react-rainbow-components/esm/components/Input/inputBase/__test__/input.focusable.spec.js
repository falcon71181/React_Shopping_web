import React from 'react';
import { mount } from 'enzyme';
import InputBase from '..';
describe('<InputBase/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(InputBase, {
      label: "Input Label"
    }));
    expect(component).toBeFocusable();
  });
});