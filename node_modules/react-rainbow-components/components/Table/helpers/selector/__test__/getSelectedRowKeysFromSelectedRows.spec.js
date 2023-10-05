"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getSelectedRowKeysFromSelectedRows = _interopRequireDefault(require("../getSelectedRowKeysFromSelectedRows"));

describe('getSelectedRowKeysFromSelectedRows', function () {
  it('should return an empty object when no argument is passed', function () {
    expect((0, _getSelectedRowKeysFromSelectedRows["default"])()).toEqual({});
  });
  it('should return an empty object when selectedRows passed are not valid', function () {
    var selectedRows = ['wrongKey'];
    var indexes = {
      qwerty1234: true,
      asdfgh1234: true
    };
    expect((0, _getSelectedRowKeysFromSelectedRows["default"])(selectedRows, indexes)).toEqual({});
  });
  it('should return the right selectedRowKeys', function () {
    var selectedRows = ['qwerty1234', 'wrongKey'];
    var indexes = {
      qwerty1234: {
        rowIndex: 0
      },
      asdfgh1234: {
        rowIndex: 1
      }
    };
    expect((0, _getSelectedRowKeysFromSelectedRows["default"])(selectedRows, indexes)).toEqual({
      qwerty1234: true
    });
  });
});