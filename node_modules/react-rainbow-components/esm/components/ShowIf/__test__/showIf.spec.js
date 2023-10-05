import React from 'react';
import { mount } from 'enzyme';
import ShowIf from '..';
describe('<ShowIf />', function () {
  it('should render the children in the DOM when isTrue is false', function () {
    var component = mount(React.createElement(ShowIf, null, React.createElement("span", {
      "data-id": "test"
    })));
    expect(component.find('[data-id="test"]').exists()).toBe(true);
  });
});