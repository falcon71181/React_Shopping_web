"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../../context");

var _ = require("..");

var _color = _interopRequireDefault(require("../defaultColors/color"));

describe('<DefaultColors />', function () {
  it('should render first Color component with tabIndex 1 and isChecked true', function () {
    var context = {
      rgba: [0, 0, 0, 1],
      tabIndex: 1,
      colors: ['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 1)']
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.DefaultColors, null)));
    expect(wrapper.find(_color["default"]).at(0).props()).toStrictEqual(expect.objectContaining({
      color: context.colors[0],
      tabIndex: 1,
      isChecked: true
    }));
    expect(wrapper.find(_color["default"]).at(1).props()).toStrictEqual(expect.objectContaining({
      color: context.colors[1],
      tabIndex: -1,
      isChecked: false
    }));
  });
});