import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../index';
import Card from '../../Card';
import TimelineMarker from '../../TimelineMarker';
import ButtonIcon from '../../ButtonIcon';
describe('<ActivityTimeline/>', function () {
  it('should render the children passed', function () {
    var component = mount(React.createElement(ActivityTimeline, null, React.createElement(Card, {
      title: "ActivityTimeline--children"
    })));
    expect(component.find(Card).exists()).toBe(true);
  });
  it('should fire onToggleSection with the right params when variant is accordion and multiple is false', function () {
    var onToggleSectionFN = jest.fn();
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion",
      onToggleSection: onToggleSectionFN
    }, React.createElement(TimelineMarker, {
      name: "marker1"
    }), React.createElement(TimelineMarker, {
      name: "marker2"
    }), React.createElement(TimelineMarker, {
      name: "marker3"
    })));
    component.find(ButtonIcon).at(0).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: 'marker1',
      toggledSection: 'marker1'
    });
    component.find(ButtonIcon).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: 'marker3',
      toggledSection: 'marker3'
    });
  });
  it('should fire onToggleSection with the right params when variant is accordion and multiple is passed', function () {
    var onToggleSectionFN = jest.fn();
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion",
      multiple: true,
      onToggleSection: onToggleSectionFN
    }, React.createElement(TimelineMarker, {
      name: "marker1"
    }), React.createElement(TimelineMarker, {
      name: "marker2"
    }), React.createElement(TimelineMarker, {
      name: "marker3"
    })));
    component.find(ButtonIcon).at(0).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1'],
      toggledSection: 'marker1'
    });
    component.find(ButtonIcon).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1', 'marker3'],
      toggledSection: 'marker3'
    });
    component.find(ButtonIcon).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1'],
      toggledSection: 'marker3'
    });
  });
  it('should expand the right marker when variant is accordion and its name is passed in activeSectionNames prop', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion",
      activeSectionNames: "marker2"
    }, React.createElement(TimelineMarker, {
      name: "marker1"
    }), React.createElement(TimelineMarker, {
      name: "marker2"
    }, React.createElement(Card, {
      title: "card"
    })), React.createElement(TimelineMarker, {
      name: "marker3"
    })));
    expect(component.find(Card).exists()).toBe(true);
  });
  it('should expand the right markers when variant is accordion, multiple is true and names are passed in activeSectionNames prop', function () {
    var component = mount(React.createElement(ActivityTimeline, {
      variant: "accordion",
      multiple: true,
      activeSectionNames: ['marker2', 'marker3']
    }, React.createElement(TimelineMarker, {
      name: "marker1"
    }, React.createElement(Card, {
      title: "card"
    })), React.createElement(TimelineMarker, {
      name: "marker2"
    }, React.createElement(Card, {
      title: "card"
    })), React.createElement(TimelineMarker, {
      name: "marker3"
    }, React.createElement(Card, {
      title: "card"
    }))));

    var cardExistsAtIndex = function cardExistsAtIndex(index) {
      return component.find(TimelineMarker).at(index).find(Card).exists();
    };

    expect(cardExistsAtIndex(0)).toBe(false);
    expect(cardExistsAtIndex(1)).toBe(true);
    expect(cardExistsAtIndex(2)).toBe(true);
  });
});