"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Sidebar = _interopRequireDefault(require("../../Sidebar"));

var _index = _interopRequireDefault(require("../index"));

var _InternalTooltip = _interopRequireDefault(require("../../InternalTooltip"));

describe('<SidebarItem when href is passed />', function () {
  it('should have aria-current of page if isSelected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-2"
    }, _react["default"].createElement(_index["default"], {
      href: "/#/Components",
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2"
    })));
    expect(component.find('a').prop('aria-current')).toBe('page');
  });
  it('should fire an event when click in SidebarItem', function () {
    var handleOnClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-3"
    }, _react["default"].createElement(_index["default"], {
      href: "/#/Components",
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-4"
    }, _react["default"].createElement(_index["default"], {
      href: "/#/Components",
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUser
      }),
      selectedIcon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
      }),
      name: "sidebaritem-test-4",
      label: "sidebaritem-test-4"
    })));
    var sidebarLink = component.find('a');
    sidebarLink.simulate('click');
    expect(component.find(_reactFontawesome.FontAwesomeIcon).prop('icon')).toBe(_freeSolidSvgIcons.faClock);
  });
});
describe('<SidebarItem when href is not passed />', function () {
  it('should have aria-current of page if isSelected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-2"
    }, _react["default"].createElement(_index["default"], {
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2"
    })));
    expect(component.find('button').prop('aria-current')).toBe('page');
  });
  it('should fire an event when click in SidebarItem', function () {
    var handleOnClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-3"
    }, _react["default"].createElement(_index["default"], {
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], {
      selectedItem: "sidebaritem-test-4"
    }, _react["default"].createElement(_index["default"], {
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
      }),
      selectedIcon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUser
      }),
      name: "sidebaritem-test-4",
      label: "sidebaritem-test-4"
    })));
    var sidebarLink = component.find('button');
    sidebarLink.simulate('click');
    expect(component.find(_reactFontawesome.FontAwesomeIcon).prop('icon')).toBe(_freeSolidSvgIcons.faUser);
  });
});
describe('<SidebarItem />', function () {
  it('should render a tooltip when passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_Sidebar["default"], null, _react["default"].createElement(_index["default"], {
      icon: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClock
      }),
      name: "sidebaritem-test-2",
      label: "sidebaritem-test-2",
      tooltip: "sidebaritem-test-2"
    })));
    expect(component.find(_InternalTooltip["default"]).exists()).toBe(true);
  });
});