"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isContentHidden = _interopRequireDefault(require("../isContentHidden"));

window.getComputedStyle = function (element) {
  return {
    getPropertyValue: function getPropertyValue(property) {
      return element.style[property];
    }
  };
};

describe('isContentHidden', function () {
  it('should return true when the element has zero size and does not has content', function () {
    var element = {
      offsetWidth: 0,
      offsetHeight: 0,
      innerHTML: null
    };
    expect((0, _isContentHidden["default"])(element)).toBe(true);
  });
  it('should return true when the element has zero size and content, but overflow style is other than visible', function () {
    var element = {
      offsetWidth: 0,
      offsetHeight: 0,
      innerHTML: 'some content',
      style: {
        overflow: 'hidden'
      }
    };
    expect((0, _isContentHidden["default"])(element)).toBe(true);
  });
  it('should return false when the element has zero size and content, but overflow style is visible', function () {
    var element = {
      offsetWidth: 0,
      offsetHeight: 0,
      innerHTML: 'some content',
      style: {
        overflow: 'visible'
      }
    };
    expect((0, _isContentHidden["default"])(element)).toBe(false);
  });
  it('should return false when the element has not zero size, but display style is other than none', function () {
    var element = {
      offsetWidth: 10,
      style: {
        display: 'block'
      }
    };
    expect((0, _isContentHidden["default"])(element)).toBe(false);
  });
  it('should return true when the element has not zero size, but display style is none', function () {
    var element = {
      offsetWidth: 0,
      offsetHeight: 10,
      style: {
        display: 'none'
      }
    };
    expect((0, _isContentHidden["default"])(element)).toBe(true);
  });
});