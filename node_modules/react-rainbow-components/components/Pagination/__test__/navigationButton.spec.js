"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _navigationButton = _interopRequireDefault(require("../navigationButton"));

describe('<NavigationButton />', function () {
  it('should call the onClick function when clicked', function () {
    var onCkickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_navigationButton["default"], {
      onClick: onCkickMockFn,
      icon: _react["default"].createElement("span", null)
    }));
    var button = component.find('button');
    button.simulate('click');
    expect(onCkickMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not call the onClick function when clicked if disabled', function () {
    var onCkickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_navigationButton["default"], {
      onClick: onCkickMockFn,
      icon: _react["default"].createElement("span", null),
      disabled: true
    }));
    var button = component.find('button');
    button.simulate('click');
    expect(onCkickMockFn).toHaveBeenCalledTimes(0);
  });
  it('should set the aria-disabled to the button element if disabled', function () {
    var onCkickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_navigationButton["default"], {
      onClick: onCkickMockFn,
      icon: _react["default"].createElement("span", null),
      disabled: true
    }));
    var button = component.find('button');
    expect(button.prop('aria-disabled')).toBe(true);
  });
});