import React from 'react';
import { mount } from 'enzyme';
import VerticalNavigation from '..';
import VerticalSection from '../../VerticalSection';
import VerticalSectionOverflow from '../../VerticalSectionOverflow';
import VerticalItem from '../../VerticalItem';
describe('<VerticalNavigation/>', function () {
  it('should set the ariaLabel passed as aria-label in the nav element', function () {
    var component = mount(React.createElement(VerticalNavigation, {
      ariaLabel: "my aria label"
    }));
    expect(component.find('nav').prop('aria-label')).toBe('my aria label');
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(VerticalNavigation, null, React.createElement("span", null, "item children")));
    expect(component.find('span').text()).toBe('item children');
  });
  it('should call onSelect event with the right data when an item is clicked', function () {
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(VerticalNavigation, {
      onSelect: onSelectMockFn
    }, React.createElement(VerticalSection, {
      label: "header section"
    }, React.createElement(VerticalItem, {
      name: "item 1",
      label: "item 1"
    }), React.createElement(VerticalItem, {
      name: "item 2",
      label: "item 2"
    }), React.createElement(VerticalItem, {
      name: "item 3",
      label: "item 3"
    }))));
    var item2 = component.find('VerticalItem[name="item 2"]').find('button[data-id="vertical-item-clickable-element"]');
    item2.simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item 2');
  });
  it('should set tabIndex 0 in the clickable element element when use VerticalSection', function () {
    var component = mount(React.createElement(VerticalNavigation, null, React.createElement(VerticalSection, {
      label: "header section"
    }, React.createElement(VerticalItem, {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex 0 in the clickable element element when use VerticalSectionOverflow and expanded is true', function () {
    var component = mount(React.createElement(VerticalNavigation, null, React.createElement(VerticalSectionOverflow, {
      expanded: true
    }, React.createElement(VerticalItem, {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex -1 in the clickable element element when use VerticalSectionOverflow and expanded is false', function () {
    var component = mount(React.createElement(VerticalNavigation, null, React.createElement(VerticalSectionOverflow, {
      expanded: false
    }, React.createElement(VerticalItem, {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(-1);
  });
});