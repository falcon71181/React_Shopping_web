import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../../ActivityTimeline';
import AccordionTimelineMarker from '../accordionMarker';
import Avatar from '../../Avatar';
import ButtonIcon from '../../ButtonIcon';
import Card from '../../Card';
import Spinner from '../../Spinner';
import ExpandCollapseButton from '../expandCollapseButton';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';
describe('<AccordionTimelineMarker/>', function () {
  it('should not render the children passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, null, React.createElement(Card, {
      title: "TimelineMarker--children"
    }))));
    expect(component.find(Card).exists()).toBe(false);
  });
  it('should not render the children passed when expanded', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, null, React.createElement(Card, {
      title: "TimelineMarker--children"
    }))));
    component.find(ButtonIcon).at(0).simulate('click');
    expect(component.find(Card).exists()).toBe(true);
  });
  it('should render the icon passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, {
      icon: React.createElement(Avatar, null)
    })));
    expect(component.find(Avatar).exists()).toBe(true);
  });
  it('should render the calendar icon by default', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, null)));
    expect(component.find('CalendarIcon').exists()).toBe(true);
  });
  it('should render the label passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, {
      label: "testing label on TimelineMarker"
    })));
    expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
  });
  it('should render the datetime passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, {
      datetime: "Yesterday"
    })));
    expect(component.find(StyledDatetime).text()).toBe('Yesterday');
  });
  it('should render the description passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, {
      description: "testing description on TimelineMarker"
    }), ","));
    expect(component.find(StyledDescription).text()).toBe('testing description on TimelineMarker');
  });
  it('should render an expand button when containing ActivityTimeline variant is accordion', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, null)));
    expect(component.find(ExpandCollapseButton).exists()).toBe(true);
  });
  it('should render a loading spinner when containing ActivityTimeline variant is accordion and isLoading prop is passed', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion"
    }, React.createElement(AccordionTimelineMarker, {
      isLoading: true
    })));
    expect(component.find(Spinner).exists()).toBe(true);
  });
});