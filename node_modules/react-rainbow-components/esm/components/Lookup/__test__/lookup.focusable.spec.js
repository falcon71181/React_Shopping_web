import React from 'react';
import { mount } from 'enzyme';
import Lookup from '..';
describe('<Lookup/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Lookup, {
      label: "Lookup Label"
    }));
    expect(component).toBeFocusable();
  });
});