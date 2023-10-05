import React from 'react';
import { mount } from 'enzyme';
import VerticalSection from '..';
import StyledContainer from '../styled/container';
describe('<VerticalSection/>', function () {
  it('should have the right className the container element', function () {
    var component = mount(React.createElement(VerticalSection, null));
    expect(component.find(StyledContainer).exists()).toBe(true);
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(VerticalSection, null, "the children text"));
    expect(component.find('ul').text()).toBe('the children text');
  });
});