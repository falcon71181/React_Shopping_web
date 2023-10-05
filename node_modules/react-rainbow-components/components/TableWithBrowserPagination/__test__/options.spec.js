"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _options = _interopRequireDefault(require("../options"));

describe('<Options />', function () {
  it('should not render any option when pages is 0', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_options["default"], {
      pages: 0
    }));
    expect(component.children().length).toBe(0);
  });
  it('should render the right amount of options when pages is greater than 1', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_options["default"], {
      pages: 4
    }));
    expect(component.children().length).toBe(4);
  });
});