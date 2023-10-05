"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _assignFieldModalTitle = _interopRequireDefault(require("../assignFieldModalTitle"));

describe('<assignFieldModalTitle />', function () {
  it('should render the right modal description', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModalTitle["default"], {
      field: "test"
    }));
    expect(component.text()).toBe("Assign to the field: test");
  });
});