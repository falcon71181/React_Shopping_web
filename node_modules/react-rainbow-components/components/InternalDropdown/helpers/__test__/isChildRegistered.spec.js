"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isChildRegistered = _interopRequireDefault(require("../isChildRegistered"));

describe('isChildRegistered', function () {
  it('should return true if children is already registered', function () {
    var children = [{
      name: 'name-1'
    }, {
      name: 'name-2'
    }, {
      name: 'name-3'
    }, {
      name: 'name-4'
    }];
    var child = 'name-3';
    expect((0, _isChildRegistered["default"])(child, children)).toBe(true);
  });
  it('should return false if children is not registered', function () {
    var children = [{
      name: 'name-1'
    }, {
      name: 'name-2'
    }, {
      name: 'name-3'
    }, {
      name: 'name-4'
    }];
    var child = 'name-6';
    expect((0, _isChildRegistered["default"])(child, children)).toBe(false);
  });
});