"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isDisabledRow = _interopRequireDefault(require("../isDisabledRow"));

describe('isDisabledRow', function () {
  it('should return false when any params are passed', function () {
    expect((0, _isDisabledRow["default"])()).toBe(false);
  });
  it('should return false when the row is selected', function () {
    expect((0, _isDisabledRow["default"])({
      rowKeyValue: 'row-2',
      maxRowSelection: 2,
      selectedRowsKeys: {
        'row-2': true
      }
    })).toBe(false);
  });
  it('should return false when the row is not selected but maxRowSelection 1', function () {
    expect((0, _isDisabledRow["default"])({
      rowKeyValue: 'row-2',
      maxRowSelection: 1,
      selectedRowsKeys: {}
    })).toBe(false);
  });
  it('should return false when the row is not selected, maxRowSelection is not 1 and does not match with selectedRowKeys length', function () {
    expect((0, _isDisabledRow["default"])({
      rowKeyValue: 'row-2',
      maxRowSelection: 2,
      selectedRowsKeys: {}
    })).toBe(false);
  });
  it('should return true when maxRowSelection is 0', function () {
    expect((0, _isDisabledRow["default"])({
      rowKeyValue: undefined,
      maxRowSelection: 0,
      selectedRowsKeys: {}
    })).toBe(true);
  });
  it('should return true when row is not selected and maxRowSelection match with selectedRowKeys length', function () {
    expect((0, _isDisabledRow["default"])({
      rowKeyValue: 'row-3',
      maxRowSelection: 2,
      selectedRowsKeys: {
        'row-1': true,
        'row-2': true
      }
    })).toBe(true);
  });
});