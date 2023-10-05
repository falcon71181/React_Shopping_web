import React from 'react';
import { mount } from 'enzyme';
import Column from '..';
describe('<Column />', function () {
  it('should return a div element', function () {
    var component = mount(React.createElement(Column, null));
    expect(component.find('div').exists()).toBe(true);
  });
});