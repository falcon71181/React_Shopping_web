"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _sortArrowIcon = _interopRequireDefault(require("../sortArrowIcon"));

var _sortArrowIcon2 = _interopRequireDefault(require("../styled/sortArrowIcon"));

describe('<SortArrowIcon />', function () {
  it('should set the prop arrowAscendent to true when direction is asc', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_sortArrowIcon["default"], {
      direction: "asc"
    }));
    expect(component.find(_sortArrowIcon2["default"]).prop('arrowAscendent')).toBe(true);
  });
  it('should set the prop arrowAscendent to true when direction is desc', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_sortArrowIcon["default"], {
      direction: "desc"
    }));
    expect(component.find(_sortArrowIcon2["default"]).prop('arrowAscendent')).toBe(false);
  });
});