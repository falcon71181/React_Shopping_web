"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _headerTitle = _interopRequireDefault(require("../headerTitle"));

describe('<HeaderTitle/>', function () {
  it('should set the title passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_headerTitle["default"], {
      title: "my title"
    }));
    expect(component.text()).toBe('my title');
  });
});