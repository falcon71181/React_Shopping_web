"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<AvatarMenu/>', function () {
  it('should pass the icon passed to the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      icon: _react["default"].createElement("svg", null)
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('icon')).toEqual(_react["default"].createElement("svg", null));
  });
  it('should set the title passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      title: "my title"
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('title')).toBe('my title');
  });
  it('should set the disabled passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('disabled')).toBe(true);
  });
  it('should set the tabIndex passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      tabIndex: 0
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('tabIndex')).toBe(0);
  });
  it('should set the initials passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      initials: "CM"
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('initials')).toBe('CM');
  });
  it('should set the initialsVariant passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      initialsVariant: "inverse"
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('initialsVariant')).toBe('inverse');
  });
  it('should set the avatarSize passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      avatarSize: "small"
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('avatarSize')).toBe('small');
  });
  it('should set the src passed in the AvatarButton', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      src: "mages/user/user2.jpg"
    }, _react["default"].createElement("span", null)));
    expect(component.find('AvatarButton').prop('src')).toBe('mages/user/user2.jpg');
  });
});