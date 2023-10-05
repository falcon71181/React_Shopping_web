"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _avatarButton = _interopRequireDefault(require("../avatarButton"));

describe('<AvatarButton/>', function () {
  it('should be focusable', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatarButton["default"], {
      label: "AvatarButton label"
    }));
    expect(component).toBeFocusable();
  });
});