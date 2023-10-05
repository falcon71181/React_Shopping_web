"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _avatarButton = _interopRequireDefault(require("../avatarButton"));

var _button = _interopRequireDefault(require("../styled/button"));

describe('<AvatarButton/>', function () {
  it('should focus the AvatarButton when the focus method is called', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatarButton["default"], null));
    component.instance().focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find(_button["default"]).prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the AvatarButton when the blur method is called', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatarButton["default"], null));
    var instance = component.instance();
    var buttonDataId = component.find(_button["default"]).prop('data-id');
    instance.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    instance.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
});