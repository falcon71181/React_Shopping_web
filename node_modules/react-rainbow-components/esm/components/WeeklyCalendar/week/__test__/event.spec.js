import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { mount } from 'enzyme';
import Event from '../event';
import StyledEventTitle from '../styled/eventTitle';
import StyledEvent from '../styled/event';
import StyledEventItem from '../styled/eventItem';
var startDate = new Date();
startDate.setHours(8, 0, 0, 0);
var endDate = new Date();
endDate.setHours(9, 30, 0, 0);
var event = {
  id: 1,
  title: 'Yuri V. Munayev',
  startDate: startDate,
  endDate: endDate
};
describe('<Event />', function () {
  it('should render the right event data', function () {
    var wrapper = mount(React.createElement(Event, event));
    expect(wrapper.find(StyledEventTitle).text()).toBe(event.title);
    expect(wrapper.find(StyledEventItem).at(1).text()).toBe('8 - 9:30 AM');
  });
  it('should render on top 320px and height 60px when the startDate is 8:00 AM and endDate 9:30 AM', function () {
    var wrapper = mount(React.createElement(Event, event));
    var style = wrapper.find(StyledEvent).prop('style');
    expect(style.top).toBe('320px');
    expect(style.height).toBe('60px');
  });
  it('should call onEventClick with the right event when click the button', function () {
    var onEventClickMockFn = jest.fn();
    var wrapper = mount(React.createElement(Event, _extends({}, event, {
      onEventClick: onEventClickMockFn
    })));
    wrapper.find(StyledEvent).simulate('click');
    expect(onEventClickMockFn).toHaveBeenCalledWith(event);
  });
});