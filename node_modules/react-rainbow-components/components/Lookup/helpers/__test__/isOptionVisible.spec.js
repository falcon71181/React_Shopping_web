"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isOptionVisible = _interopRequireDefault(require("../isOptionVisible"));

describe('isOptionVisible', function () {
  it('should return true when rect dimensions match in element and container', function () {
    var element = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 40
        };
      }
    };
    var container = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 40
        };
      }
    };
    expect((0, _isOptionVisible["default"])(element, container)).toBe(true);
  });
  it('should return true when element rect dimensions are inside container', function () {
    var element = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 20,
          bottom: 30
        };
      }
    };
    var container = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 40
        };
      }
    };
    expect((0, _isOptionVisible["default"])(element, container)).toBe(true);
  });
  it('should return false when element top is less than container top', function () {
    var element = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 8,
          bottom: 40
        };
      }
    };
    var container = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 40
        };
      }
    };
    expect((0, _isOptionVisible["default"])(element, container)).toBe(false);
  });
  it('should return false when element bottom is greater than container bottom', function () {
    var element = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 41
        };
      }
    };
    var container = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 10,
          bottom: 40
        };
      }
    };
    expect((0, _isOptionVisible["default"])(element, container)).toBe(false);
  });
});