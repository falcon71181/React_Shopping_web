"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getArrayDataFromWorkbook;

var _xlsx = _interopRequireDefault(require("xlsx"));

function getArrayDataFromWorkbook(workbook) {
  try {
    return _xlsx["default"].utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
  } catch (error) {
    console.log(error);
    return [];
  }
}