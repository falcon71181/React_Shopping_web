"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function Input(props) {
  return _react["default"].createElement("input", props);
}

var InputComponent = (0, _["default"])(Input);
describe('withReduxForm', function () {
  it('should be focusable', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, null));
    expect(component).toBeFocusable();
  });
});