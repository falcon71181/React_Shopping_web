import React from 'react';
import { mount } from 'enzyme';
import HeaderTitle from '../headerTitle';
describe('<HeaderTitle/>', function () {
  it('should set the title passed', function () {
    var component = mount(React.createElement(HeaderTitle, {
      title: "my title"
    }));
    expect(component.text()).toBe('my title');
  });
});