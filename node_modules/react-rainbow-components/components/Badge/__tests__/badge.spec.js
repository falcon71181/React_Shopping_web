"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<Badge/>', function () {
  it('should render the "Badge" with the label passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Testing label in Badge"
    }));
    expect(component.find('Content').text()).toBe('Testing label in Badge');
  });
  it('should render the "Badge" with the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, "Testing children in Badge"));
    expect(component.find('Content').text()).toBe('Testing children in Badge');
  });
  it('should not render the "Badge" when label and children are not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.children().length).toBe(0);
  });
});