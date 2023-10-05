"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getRowSelectionInputType = _interopRequireDefault(require("../getRowSelectionInputType"));

describe('getRowSelectionInputType', function () {
  it('should return "radio" when maxRowSelection passed is 1', function () {
    var maxRowSelection = 1;
    expect((0, _getRowSelectionInputType["default"])(maxRowSelection)).toBe('radio');
  });
  it('should return "checkbox" when maxRowSelection passed is other than 1', function () {
    var values = [0, 2, 3, '0', 'abc', [], {}, undefined, null, function () {}];
    values.forEach(function (value) {
      expect((0, _getRowSelectionInputType["default"])(value)).toBe('checkbox');
    });
  });
  it('should return "checkbox" when maxRowSelection passed is 1 and rows length is 1', function () {
    var maxRowSelection = 1;
    var rowsLength = 1;
    expect((0, _getRowSelectionInputType["default"])(maxRowSelection, rowsLength)).toBe('checkbox');
  });
  it('should return "checkbox" when maxRowSelection passed is greater than 1 and rows length is 1', function () {
    var maxRowSelection = 3;
    var rowsLength = 1;
    expect((0, _getRowSelectionInputType["default"])(maxRowSelection, rowsLength)).toBe('checkbox');
  });
});