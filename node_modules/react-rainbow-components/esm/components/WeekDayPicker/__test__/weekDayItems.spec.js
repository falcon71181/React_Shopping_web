import React from 'react';
import { mount } from 'enzyme';
import WeekDayItems from '../weekDayItems';
import WeekDay from '../weekDay';
describe('<WeekDayItems />', function () {
  it('should render all the weekDay elements', function () {
    var component = mount(React.createElement(WeekDayItems, null));
    expect(component.find(WeekDay).length).toBe(7);
  });
  it('should have keys assignation using week-day and input index', function () {
    var component = mount(React.createElement(WeekDayItems, null));
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    days.forEach(function (day, index) {
      expect(component.find(WeekDay).at(index).key()).toBe(day);
    });
  });
});