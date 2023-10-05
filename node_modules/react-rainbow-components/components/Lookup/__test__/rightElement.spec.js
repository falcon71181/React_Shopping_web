"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _rightElement = _interopRequireDefault(require("../rightElement"));

var _inputIcon = _interopRequireDefault(require("../styled/inputIcon"));

describe('<RightElement />', function () {
  it('should render an icon container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_rightElement["default"], null));
    expect(component.find(_inputIcon["default"]).exists()).toBe(true);
  });
  it('should render a close button when showCloseButton is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_rightElement["default"], {
      showCloseButton: true
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(true);
  });
  it('should fire an event when click the button', function () {
    var onClearMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_rightElement["default"], {
      showCloseButton: true,
      onClear: onClearMockFn
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(onClearMockFn).toHaveBeenCalledTimes(1);
  });
});