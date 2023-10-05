import React from 'react';
import { mount } from 'enzyme';
import Breadcrumbs from '../index';
import Breadcrumb from '../../Breadcrumb/index';
describe('<Breadcrumbs/>', function () {
  it('should have a aria-label attribute for accessibility', function () {
    var component = mount(React.createElement(Breadcrumbs, null, React.createElement(Breadcrumb, {
      label: "Parent entity"
    })));
    expect(component.find('[aria-label="Breadcrumbs"]').exists()).toBe(true);
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(Breadcrumbs, null, React.createElement("span", null)));
    expect(component.find('span').exists()).toBe(true);
  });
});