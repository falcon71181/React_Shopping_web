"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ActivityTimeline = _interopRequireDefault(require("../../ActivityTimeline"));

var _index = _interopRequireDefault(require("../index"));

var _basicMarker = _interopRequireDefault(require("../basicMarker"));

var _accordionMarker = _interopRequireDefault(require("../accordionMarker"));

describe('<TimelineMarker/>', function () {
  it('should render a basic marker', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], null, _react["default"].createElement(_index["default"], null)));
    expect(component.find(_basicMarker["default"]).exists()).toBe(true);
    expect(component.find(_accordionMarker["default"]).exists()).toBe(false);
  });
  it('should render an accordion marker when variant is accordion', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_index["default"], {
      isLoading: true
    })));
    expect(component.find(_basicMarker["default"]).exists()).toBe(false);
    expect(component.find(_accordionMarker["default"]).exists()).toBe(true);
  });
});