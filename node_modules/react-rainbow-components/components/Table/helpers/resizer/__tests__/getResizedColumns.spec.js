"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getResizedColumns = _interopRequireDefault(require("../getResizedColumns"));

describe('getResizedColumns', function () {
  it('should return the same columns passed', function () {
    var columns = [{
      label: 'Name',
      field: 'name'
    }, {
      label: 'Email',
      field: 'email'
    }];
    expect((0, _getResizedColumns["default"])({
      columns: columns
    })).toEqual([{
      label: 'Name',
      field: 'name'
    }, {
      label: 'Email',
      field: 'email'
    }]);
  });
  it('should return the right columns', function () {
    var columns = [{
      label: 'Name',
      field: 'name',
      computedWidth: 50
    }, {
      label: 'Email',
      field: 'email',
      computedWidth: 50
    }];
    expect((0, _getResizedColumns["default"])({
      columns: columns,
      colIndex: 1,
      widthDelta: 30
    })).toEqual([{
      label: 'Name',
      field: 'name',
      computedWidth: 50
    }, {
      label: 'Email',
      field: 'email',
      isResized: true,
      computedWidth: 80
    }]);
  });
});