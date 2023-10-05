"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<ShowIf />', function () {
  it('should render the children in the DOM when isTrue is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("span", {
      "data-id": "test"
    })));
    expect(component.find('[data-id="test"]').exists()).toBe(true);
  });
});