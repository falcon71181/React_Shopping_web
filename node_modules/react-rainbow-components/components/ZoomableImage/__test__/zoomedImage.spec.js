"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _styled = require("../styled");

var _zoomedImage = _interopRequireDefault(require("../zoomedImage"));

jest.useFakeTimers();
var eventMap = {};
document.addEventListener = jest.fn(function (event, callback) {
  eventMap[event] = callback;
});
describe('<ZoomableImage />', function () {
  it('should call close when clicked', function () {
    var close = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_zoomedImage["default"], {
      src: "https://via.placeholder.com/450",
      originalRect: {},
      close: close
    }));
    component.find(_styled.StyledCenteredImage).simulate('click');
    jest.runAllTimers();
    expect(close).toHaveBeenCalled();
  });
  it('should close when Escape key is pressed', function () {
    var close = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_zoomedImage["default"], {
      src: "https://via.placeholder.com/450",
      originalRect: {},
      close: close
    }));
    eventMap.keydown({
      key: 'Escape'
    });
    jest.runAllTimers();
    expect(close).toHaveBeenCalled();
  });
});