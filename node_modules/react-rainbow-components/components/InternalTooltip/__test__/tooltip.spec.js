"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _styled = _interopRequireDefault(require("../styled"));

jest.useFakeTimers();
var triggerElement = {
  current: {
    getBoundingClientRect: jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    })
  }
};
describe('<Tooltip />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should have top as default position', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      triggerElementRef: triggerElement
    }));
    expect(component.prop('preferredPosition')).toBe('top');
  });
  it('should set the position after onOpen', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      triggerElementRef: triggerElement,
      isVisible: true
    }));
    jest.runAllTimers();
    expect(component.find(_styled["default"]).prop('position')).not.toBeNull();
  });
});