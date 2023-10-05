"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getOptionsLength = _interopRequireDefault(require("../getOptionsLength"));

describe('getOptionsLength', function () {
  it('should return 0', function () {
    expect((0, _getOptionsLength["default"])()).toBe(0);
    expect((0, _getOptionsLength["default"])([])).toBe(0);
  });
  it('should return the right length when there is not type "header"', function () {
    var options = [{
      label: 'Paris'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect((0, _getOptionsLength["default"])(options)).toBe(3);
  });
  it('should return the right length when there is type "header"', function () {
    var options = [{
      label: 'European Cities',
      type: 'header'
    }, {
      label: 'Paris',
      description: 'An awesome city'
    }, {
      label: 'Madrid'
    }, {
      label: 'American Cities',
      type: 'header'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }, {
      label: 'Miami'
    }];
    expect((0, _getOptionsLength["default"])(options)).toBe(5);
  });
});