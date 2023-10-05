import React from 'react';
import { mount } from 'enzyme';
import VerticalSectionOverflow from '..';
describe('<VerticalSectionOverflow/>', function () {
  it('should change the isExpanded state when the button element is clicked', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.state().isExpanded).toBe(false);
    component.find('button').simulate('click');
    expect(component.state().isExpanded).toBe(true);
  });
  it('should change the isExpanded state when the button element is clicked and the expanded is set to true', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, {
      expanded: true
    }));
    expect(component.state().isExpanded).toBe(true);
    component.find('button').simulate('click');
    expect(component.state().isExpanded).toBe(false);
  });
  it('should set a generated id as aria-controls in button element and as id in the overflow container', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.find('button').prop('aria-controls')).toMatch(/search-results/);
    expect(component.find('div[data-id="vertical-overflow"]').prop('id')).toMatch(/search-results/);
  });
  it('should set the aria-expanded in the button element to false initially', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.find('button').prop('aria-expanded')).toBe(false);
  });
  it('should set the aria-expanded in the button element to true if expanded is passed', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, {
      expanded: true
    }));
    expect(component.find('button').prop('aria-expanded')).toBe(true);
  });
  it('should set the aria-expanded in the button element to true if it is clicked', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.find('button').prop('aria-expanded')).toBe(false);
    component.find('button').simulate('click');
    expect(component.find('button').prop('aria-expanded')).toBe(true);
  });
  it('should pass the right props to Description component when use default values', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.find('Description').props()).toEqual({
      description: '',
      isExpanded: false
    });
  });
  it('should pass the right props to Description component when the respective props are passed', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, {
      description: "collapsed label",
      expanded: true
    }));
    expect(component.find('Description').props()).toEqual({
      description: 'collapsed label',
      isExpanded: true
    });
  });
  it('should set the isExpanded prop in Description component to true when the the button is clicked', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null));
    expect(component.find('Description').prop('isExpanded')).toBe(false);
    component.find('button').simulate('click');
    expect(component.find('Description').prop('isExpanded')).toBe(true);
  });
  it('should set the assistiveText passed as text in AssistiveText component', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, {
      assistiveText: "description text"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('description text');
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(VerticalSectionOverflow, null, React.createElement("span", null, "the section children")));
    expect(component.find('ul').text()).toBe('the section children');
  });
  it('should fire an event when click in the VerticalSectionOverflow and onToggleSection is a function', function () {
    var handleToggleSectionMockFn = jest.fn();
    var component = mount(React.createElement(VerticalSectionOverflow, {
      onToggleSection: handleToggleSectionMockFn
    }, React.createElement("span", null, "the section children")));
    var buttonComponent = component.find('button');
    buttonComponent.simulate('click');
    expect(handleToggleSectionMockFn).toHaveBeenCalledTimes(1);
  });
});