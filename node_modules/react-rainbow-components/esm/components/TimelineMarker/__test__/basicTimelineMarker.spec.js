import React from 'react';
import { mount } from 'enzyme';
import BasicTimelineMarker from '../basicMarker';
import Card from '../../Card';
import Avatar from '../../Avatar';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';
describe('<BasicTimelineMarker/>', function () {
  it('should render the children passed', function () {
    var component = mount(React.createElement(BasicTimelineMarker, null, React.createElement(Card, {
      title: "TimelineMarker--children"
    })));
    expect(component.find(Card).exists()).toBe(true);
  });
  it('should render the icon passed', function () {
    var component = mount(React.createElement(BasicTimelineMarker, {
      icon: React.createElement(Avatar, null)
    }));
    expect(component.find(Avatar).exists()).toBe(true);
  });
  it('should render the calendar icon by default', function () {
    var component = mount(React.createElement(BasicTimelineMarker, null));
    expect(component.find('CalendarIcon').exists()).toBe(true);
  });
  it('should render the label passed', function () {
    var component = mount(React.createElement(BasicTimelineMarker, {
      label: "testing label on TimelineMarker"
    }));
    expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
  });
  it('should render the datetime passed', function () {
    var component = mount(React.createElement(BasicTimelineMarker, {
      datetime: "Yesterday"
    }));
    expect(component.find(StyledDatetime).text()).toBe('Yesterday');
  });
  it('should render the description passed', function () {
    var component = mount(React.createElement(BasicTimelineMarker, {
      description: "testing description on TimelineMarker"
    }));
    expect(component.find(StyledDescription).text()).toBe('testing description on TimelineMarker');
  });
});