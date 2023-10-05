"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _loadingCells = _interopRequireDefault(require("../loadingCells"));

describe('<LoadingCells />', function () {
  it('should not render anything when value is 0', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_loadingCells["default"], {
      value: 0
    }));
    expect(component.children().length).toBe(0);
  });
  it('should render the amount of children that match with the value passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_loadingCells["default"], {
      value: 3,
      columns: [{}, {}, {}]
    }));
    expect(component.children().length).toBe(3);
  });
});