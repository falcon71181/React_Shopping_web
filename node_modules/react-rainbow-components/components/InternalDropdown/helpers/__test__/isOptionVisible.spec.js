"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isOptionVisible = _interopRequireDefault(require("../isOptionVisible"));

var container;
describe('isOptionVisible', function () {
  beforeEach(function () {
    container = {
      top: 203.03334045410156,
      bottom: 428.03334045410156
    };
    container.getBoundingClientRect = jest.fn(function () {
      return {
        top: container.top,
        bottom: container.bottom
      };
    });
  });
  it('should return true when element is within container visible bounds', function () {
    var elements = [{
      top: 237.78334045410156,
      bottom: 282.78334045410156
    }, {
      top: 317.5333251953125,
      bottom: 362.5333251953125
    }, {
      top: 362.5333251953125,
      bottom: 407.5333251953125
    }].map(function (element) {
      return {
        top: element.top,
        bottom: element.bottom,
        getBoundingClientRect: jest.fn(function () {
          return {
            top: element.top,
            bottom: element.bottom
          };
        })
      };
    });
    elements.forEach(function (element) {
      expect((0, _isOptionVisible["default"])(element, container)).toBe(true);
    });
  });
  it('should return false when element is not within container visible bounds', function () {
    var elements = [{
      top: 407.5333251953125,
      bottom: 452.5333251953125
    }, {
      top: 452.5333251953125,
      bottom: 497.5333251953125
    }].map(function (element) {
      return {
        top: element.top,
        bottom: element.bottom,
        getBoundingClientRect: jest.fn(function () {
          return {
            top: element.top,
            bottom: element.bottom
          };
        })
      };
    });
    elements.forEach(function (element) {
      expect((0, _isOptionVisible["default"])(element, container)).toBe(false);
    });
  });
});