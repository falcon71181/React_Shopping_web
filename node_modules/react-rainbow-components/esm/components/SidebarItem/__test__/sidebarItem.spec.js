import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Sidebar';
import SidebarItem from '../index';
import InternalTooltip from '../../InternalTooltip';
describe('<SidebarItem when href is passed />', function () {
  it('should have aria-current of page if isSelected', function () {
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-2"
    }, React.createElement(SidebarItem, {
      href: "/#/Components",
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2"
    })));
    expect(component.find('a').prop('aria-current')).toBe('page');
  });
  it('should fire an event when click in SidebarItem', function () {
    var handleOnClickMockFn = jest.fn();
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-3"
    }, React.createElement(SidebarItem, {
      href: "/#/Components",
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-3",
      label: "sidebaritem-test-3",
      onClick: handleOnClickMockFn
    })));
    var sidebarLink = component.find('a');
    sidebarLink.simulate('click');
    expect(handleOnClickMockFn).toHaveBeenCalledTimes(1);
  });
  it('should render the right icon when the item is selected', function () {
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-4"
    }, React.createElement(SidebarItem, {
      href: "/#/Components",
      icon: React.createElement(FontAwesomeIcon, {
        icon: faUser
      }),
      selectedIcon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-4",
      label: "sidebaritem-test-4"
    })));
    var sidebarLink = component.find('a');
    sidebarLink.simulate('click');
    expect(component.find(FontAwesomeIcon).prop('icon')).toBe(faClock);
  });
});
describe('<SidebarItem when href is not passed />', function () {
  it('should have aria-current of page if isSelected', function () {
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-2"
    }, React.createElement(SidebarItem, {
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2"
    })));
    expect(component.find('button').prop('aria-current')).toBe('page');
  });
  it('should fire an event when click in SidebarItem', function () {
    var handleOnClickMockFn = jest.fn();
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-3"
    }, React.createElement(SidebarItem, {
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-3",
      label: "sidebaritem-test-3",
      onClick: handleOnClickMockFn
    })));
    var sidebarLink = component.find('button');
    sidebarLink.simulate('click');
    expect(handleOnClickMockFn).toHaveBeenCalledTimes(1);
  });
  it('should render the right icon when the item is selected', function () {
    var component = mount(React.createElement(Sidebar, {
      selectedItem: "sidebaritem-test-4"
    }, React.createElement(SidebarItem, {
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      selectedIcon: React.createElement(FontAwesomeIcon, {
        icon: faUser
      }),
      name: "sidebaritem-test-4",
      label: "sidebaritem-test-4"
    })));
    var sidebarLink = component.find('button');
    sidebarLink.simulate('click');
    expect(component.find(FontAwesomeIcon).prop('icon')).toBe(faUser);
  });
});
describe('<SidebarItem />', function () {
  it('should render a tooltip when passed', function () {
    var component = mount(React.createElement(Sidebar, null, React.createElement(SidebarItem, {
      icon: React.createElement(FontAwesomeIcon, {
        icon: faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2",
      tooltip: "sidebaritem-test-2"
    })));
    expect(component.find(InternalTooltip).exists()).toBe(true);
  });
});