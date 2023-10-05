"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _styled = require("../styled");

var _zoomedImage = _interopRequireDefault(require("../zoomedImage"));

describe('<ZoomableImage />', function () {
  it('should zoom the image when clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      src: "https://via.placeholder.com/450"
    }));
    component.find(_styled.StyledImage).simulate('click');
    expect(component.find(_zoomedImage["default"]).exists()).toBe(true);
  });
});