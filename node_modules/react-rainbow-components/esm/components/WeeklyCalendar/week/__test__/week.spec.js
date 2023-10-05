import React from 'react';
import { mount } from 'enzyme';
import Week from '..';
var week = new Date(2020, 3, 5);
describe('<Week />', function () {
  it('should render the 7 days of the week', function () {
    var wrapper = mount(React.createElement(Week, {
      week: week
    }));
    expect(wrapper.find('Days').children().length).toBe(7);
  });
  it('should render the 24 hours of the day', function () {
    var wrapper = mount(React.createElement(Week, {
      week: week
    }));
    expect(wrapper.find('GridLines').children().length).toBe(24);
  });
});