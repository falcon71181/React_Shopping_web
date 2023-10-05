"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _cardBody = _interopRequireDefault(require("../cardBody"));

var _Spinner = _interopRequireDefault(require("../../Spinner"));

describe('<CardBody/>', function () {
  it('should render the Spinner when isLoading is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_cardBody["default"], {
      isLoading: true
    }, "Test"));
    expect(component.find(_Spinner["default"]).exists()).toBe(true);
  });
  it('should not render the Spinner when isLoading is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_cardBody["default"], null, "Test"));
    expect(component.find(_Spinner["default"]).exists()).toBe(false);
  });
  it('should render the children when isLoading is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_cardBody["default"], null, _react["default"].createElement("div", null, "Test")));
    expect(component.text()).toBe('Test');
  });
  it('should not render the children when isLoading is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_cardBody["default"], {
      isLoading: true
    }, "Test"));
    expect(component.text()).toBeFalsy();
  });
});