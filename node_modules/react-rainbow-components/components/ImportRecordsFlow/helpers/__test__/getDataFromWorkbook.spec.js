"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _xlsx = _interopRequireDefault(require("xlsx"));

var _getDataFromWorkbook = _interopRequireDefault(require("../getDataFromWorkbook"));

var _getWorkbookParams = _interopRequireDefault(require("./getWorkbookParams"));

_xlsx["default"].utils.sheet_to_row_object_array = jest.fn();
describe('getDataFromWorkbook', function () {
  it('should call sheet_to_row_object_array with the right arguments', function () {
    var workbook = (0, _getWorkbookParams["default"])();
    (0, _getDataFromWorkbook["default"])(workbook);
    expect(_xlsx["default"].utils.sheet_to_row_object_array).toHaveBeenCalledWith(workbook.Sheets[workbook.SheetNames[0]]);
  });
});