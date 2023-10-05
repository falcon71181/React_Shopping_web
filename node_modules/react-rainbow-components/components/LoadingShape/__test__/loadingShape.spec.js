"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _styled = require("../styled");

describe('<LoadingShape', function () {
  it('should have "rounded-rect" as default shape', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.prop('shape')).toBe('rounded-rect');
  });
  it('should render the image icon when variant is "image"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      shape: "square",
      variant: "image"
    }));
    expect(component.find(_styled.StyledImageIcon).length).toBe(1);
  });
  it('should render the user icon when variant is "avatar"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      shape: "square",
      variant: "avatar"
    }));
    expect(component.find(_styled.StyledAvatarIcon).length).toBe(1);
  });
});