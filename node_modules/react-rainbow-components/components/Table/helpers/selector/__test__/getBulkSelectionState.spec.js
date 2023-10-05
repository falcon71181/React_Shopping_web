"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getBulkSelectionState = _interopRequireDefault(require("../getBulkSelectionState"));

var selectedRowsKeys = {
  qwerty1234: true,
  asdfgh1234: true,
  zxcvbn1234: true
};
describe('getBulkSelectionState', function () {
  it('should return "none" when any params are passed', function () {
    expect((0, _getBulkSelectionState["default"])()).toBe('none');
  });
  it('should return "none" when selectedRowsKeys length is 0', function () {
    expect((0, _getBulkSelectionState["default"])({
      maxRowSelection: 3,
      selectedRowsKeys: {}
    })).toBe('none');
  });
  it('should return "all" when maxRowSelection match with the selectedRowsKeys length', function () {
    expect((0, _getBulkSelectionState["default"])({
      maxRowSelection: 3,
      selectedRowsKeys: selectedRowsKeys
    })).toBe('all');
  });
  it('should return "some" when selectedRowsKeys length is other than 0 and does not match with maxRowSelection', function () {
    var values = [0, 1, 2, 4, 5];
    values.forEach(function (value) {
      expect((0, _getBulkSelectionState["default"])({
        maxRowSelection: value,
        selectedRowsKeys: selectedRowsKeys
      })).toBe('some');
    });
  });
});