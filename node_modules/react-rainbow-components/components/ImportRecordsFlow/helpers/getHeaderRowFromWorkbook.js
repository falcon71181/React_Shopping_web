"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getHeaderRowFromWorkbook;

var _xlsx = _interopRequireDefault(require("xlsx"));

function getHeaderRowFromWorkbook(workbook) {
  try {
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    var headers = [];

    var range = _xlsx["default"].utils.decode_range(sheet['!ref']);

    var C;
    var R = range.s.r;

    for (C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[_xlsx["default"].utils.encode_cell({
        c: C,
        r: R
      })];

      var hdr = "UNKNOWN ".concat(C);
      if (cell && cell.t) hdr = _xlsx["default"].utils.format_cell(cell);
      headers.push(hdr);
    }

    return headers;
  } catch (error) {
    console.log(error);
    return [];
  }
}