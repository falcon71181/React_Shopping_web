"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUpdatedRowsWhenDeselect = _interopRequireDefault(require("../getUpdatedRowsWhenDeselect"));

var rows = [{
  key: 'row-1',
  isSelected: true,
  isDisabled: false
}, {
  key: 'row-2',
  isSelected: true,
  isDisabled: false
}, {
  key: 'row-3',
  isDisabled: false
}];
var indexes = {
  'row-1': {
    rowIndex: 0
  },
  'row-2': {
    rowIndex: 1
  },
  'row-3': {
    rowIndex: 2
  }
};
describe('getUpdatedRowsWhenDeselect', function () {
  it('should return an empty array when any params are passed', function () {
    expect((0, _getUpdatedRowsWhenDeselect["default"])()).toEqual([]);
  });
  it('should return the same rows passed when rows are the only param passed', function () {
    expect((0, _getUpdatedRowsWhenDeselect["default"])({
      rows: rows
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
      isDisabled: false
    }]);
  });
  it('should return the right rows when maxRowSelection is 0', function () {
    var selectedRowsKeys = {};
    expect((0, _getUpdatedRowsWhenDeselect["default"])({
      maxRowSelection: 0,
      rows: rows,
      indexes: indexes,
      isMultiple: false,
      rowKeyValue: 'row-2',
      lastSelectedRowKey: undefined,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-3',
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-2': false
    });
  });
  it('should return the right rows when maxRowSelection is greater than 0', function () {
    var values = [1, 2, 3, 4, 5];
    values.forEach(function (value) {
      var selectedRowsKeys = {};
      expect((0, _getUpdatedRowsWhenDeselect["default"])({
        maxRowSelection: value,
        rows: rows,
        indexes: indexes,
        isMultiple: false,
        rowKeyValue: 'row-2',
        lastSelectedRowKey: undefined,
        selectedRowsKeys: selectedRowsKeys
      })).toEqual([{
        key: 'row-1',
        isSelected: true,
        isDisabled: false
      }, {
        key: 'row-2',
        isSelected: false,
        isDisabled: false
      }, {
        key: 'row-3',
        isDisabled: false
      }]);
      expect(selectedRowsKeys).toEqual({
        'row-2': false
      });
    });
  });
  it('should return the right rows when there are two row selected and maxRowSelection 4', function () {
    var selectedRowsKeys = {
      'row-1': true,
      'row-2': true,
      'row-3': false
    };
    expect((0, _getUpdatedRowsWhenDeselect["default"])({
      maxRowSelection: 4,
      rows: rows,
      indexes: indexes,
      isMultiple: true,
      rowKeyValue: 'row-2',
      lastSelectedRowKey: undefined,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-3',
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': false,
      'row-3': false
    });
  });
  it('should return the right rows when is multiple and the last row selected is "row-1"', function () {
    var selectedRowsKeys = {
      'row-1': true,
      'row-2': true,
      'row-3': true
    };
    expect((0, _getUpdatedRowsWhenDeselect["default"])({
      maxRowSelection: 4,
      rows: [{
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
      }],
      indexes: indexes,
      isMultiple: true,
      rowKeyValue: 'row-3',
      lastSelectedRowKey: 'row-1',
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': false,
      'row-2': false,
      'row-3': false
    });
  });
});