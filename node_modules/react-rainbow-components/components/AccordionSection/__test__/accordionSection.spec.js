"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ = _interopRequireDefault(require(".."));

describe('<AccordionSection/>', function () {
  it('should have type button on section summary', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_["default"], {
      label: "Test section"
    })),
        getByRole = _render.getByRole;

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});