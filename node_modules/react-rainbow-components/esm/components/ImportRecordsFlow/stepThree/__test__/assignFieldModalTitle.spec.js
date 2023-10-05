import React from 'react';
import { mount } from 'enzyme';
import AssignFieldModalTitle from '../assignFieldModalTitle';
describe('<assignFieldModalTitle />', function () {
  it('should render the right modal description', function () {
    var component = mount(React.createElement(AssignFieldModalTitle, {
      field: "test"
    }));
    expect(component.text()).toBe("Assign to the field: test");
  });
});