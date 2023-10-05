"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _VerticalSection = _interopRequireDefault(require("../../VerticalSection"));

var _VerticalSectionOverflow = _interopRequireDefault(require("../../VerticalSectionOverflow"));

var _VerticalItem = _interopRequireDefault(require("../../VerticalItem"));

describe('<VerticalNavigation/>', function () {
  it('should set the ariaLabel passed as aria-label in the nav element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      ariaLabel: "my aria label"
    }));
    expect(component.find('nav').prop('aria-label')).toBe('my aria label');
  });
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("span", null, "item children")));
    expect(component.find('span').text()).toBe('item children');
  });
  it('should call onSelect event with the right data when an item is clicked', function () {
    var onSelectMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onSelect: onSelectMockFn
    }, _react["default"].createElement(_VerticalSection["default"], {
      label: "header section"
    }, _react["default"].createElement(_VerticalItem["default"], {
      name: "item 1",
      label: "item 1"
    }), _react["default"].createElement(_VerticalItem["default"], {
      name: "item 2",
      label: "item 2"
    }), _react["default"].createElement(_VerticalItem["default"], {
      name: "item 3",
      label: "item 3"
    }))));
    var item2 = component.find('VerticalItem[name="item 2"]').find('button[data-id="vertical-item-clickable-element"]');
    item2.simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item 2');
  });
  it('should set tabIndex 0 in the clickable element element when use VerticalSection', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement(_VerticalSection["default"], {
      label: "header section"
    }, _react["default"].createElement(_VerticalItem["default"], {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex 0 in the clickable element element when use VerticalSectionOverflow and expanded is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement(_VerticalSectionOverflow["default"], {
      expanded: true
    }, _react["default"].createElement(_VerticalItem["default"], {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex -1 in the clickable element element when use VerticalSectionOverflow and expanded is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement(_VerticalSectionOverflow["default"], {
      expanded: false
    }, _react["default"].createElement(_VerticalItem["default"], {
      name: "item 1",
      label: "item 1"
    }))));
    expect(component.find('button[data-id="vertical-item-clickable-element"]').prop('tabIndex')).toBe(-1);
  });
});