"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isChildRegistered = _interopRequireDefault(require("../isChildRegistered"));

var children = [{
  id: 'name-1'
}, {
  id: 'name-2'
}, {
  id: 'name-3'
}, {
  id: 'name-4'
}];
describe('isChildRegistered', function () {
  it('should return true if children is already registered', function () {
    expect((0, _isChildRegistered["default"])({
      children: children,
      id: 'name-3'
    })).toBe(true);
  });
  it('should return false if children is not registered', function () {
    expect((0, _isChildRegistered["default"])({
      children: children,
      id: 'name-6'
    })).toBe(false);
  });
});