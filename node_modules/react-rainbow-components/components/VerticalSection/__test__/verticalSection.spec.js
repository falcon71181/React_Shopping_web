"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _container = _interopRequireDefault(require("../styled/container"));

describe('<VerticalSection/>', function () {
  it('should have the right className the container element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find(_container["default"]).exists()).toBe(true);
  });
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, "the children text"));
    expect(component.find('ul').text()).toBe('the children text');
  });
});