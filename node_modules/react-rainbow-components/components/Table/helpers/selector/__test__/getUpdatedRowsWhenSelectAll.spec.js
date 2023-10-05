"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUpdatedRowsWhenSelectAll = _interopRequireDefault(require("../getUpdatedRowsWhenSelectAll"));

var rows = [{
  key: 'row-1',
  isSelected: false,
  isDisabled: false
}, {
  key: 'row-2',
  isSelected: true,
  isDisabled: false
}, {
  key: 'row-3',
  isSelected: false,
  isDisabled: false
}];
describe('getUpdatedRowsWhenSelectAll', function () {
  it('should an empty array when any params are passed', function () {
    expect((0, _getUpdatedRowsWhenSelectAll["default"])()).toEqual([]);
  });
  it('should the right rows when only rows param is passed', function () {
    expect((0, _getUpdatedRowsWhenSelectAll["default"])({
      rows: rows
    })).toEqual([{
      key: 'row-1',
      isSelected: false,
      isDisabled: true
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: true
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: true
    }]);
  });
  it('should the right rows when maxRowSelection is 1', function () {
    var selectedRowsKeys = {};
    expect((0, _getUpdatedRowsWhenSelectAll["default"])({
      rows: rows,
      maxRowSelection: 1,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: true
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: true
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true
    });
  });
  it('should the right rows when maxRowSelection is 2', function () {
    var selectedRowsKeys = {};
    expect((0, _getUpdatedRowsWhenSelectAll["default"])({
      rows: rows,
      maxRowSelection: 2,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: true
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true
    });
  });
  it('should the right rows when maxRowSelection is 3', function () {
    var selectedRowsKeys = {};
    expect((0, _getUpdatedRowsWhenSelectAll["default"])({
      rows: rows,
      maxRowSelection: 3,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: true,
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true,
      'row-3': true
    });
  });
});