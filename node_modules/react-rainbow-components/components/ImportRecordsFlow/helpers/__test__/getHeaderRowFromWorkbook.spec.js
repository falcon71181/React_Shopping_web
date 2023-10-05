"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _xlsx = _interopRequireDefault(require("xlsx"));

var _getHeaderRowFromWorkbook = _interopRequireDefault(require("../getHeaderRowFromWorkbook"));

var _getWorkbookParams = _interopRequireDefault(require("./getWorkbookParams"));

_xlsx["default"].utils.decode_range = jest.fn(function () {
  return {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 2,
      r: 2
    }
  };
});
describe('getHeaderRowFromWorkbook', function () {
  it('should return headers values using the first row values from the workBook', function () {
    var workbook = (0, _getWorkbookParams["default"])();
    var headers = (0, _getHeaderRowFromWorkbook["default"])(workbook);
    var expectedHeaders = ['First_Name', 'Last_Name', 'Email'];
    expect(headers).toEqual(expectedHeaders);
  });
  it('should return empty values if workbook sheet is not valid', function () {
    var headers = (0, _getHeaderRowFromWorkbook["default"])([]);
    expect(headers.length).toBe(0);
  });
  it('should call XLSX.utils.decode_range with the right argument', function () {
    var workbook = (0, _getWorkbookParams["default"])();
    (0, _getHeaderRowFromWorkbook["default"])(workbook);
    expect(_xlsx["default"].utils.decode_range).toHaveBeenCalledWith(workbook.Sheets[workbook.SheetNames[0]]['!ref']);
  });
});