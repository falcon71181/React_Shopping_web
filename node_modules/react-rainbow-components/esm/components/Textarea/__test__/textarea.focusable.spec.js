import React from 'react';
import { mount } from 'enzyme';
import Textarea from '..';
describe('<Textarea/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Textarea, {
      label: "Textarea Label"
    }));
    expect(component).toBeFocusable();
  });
});