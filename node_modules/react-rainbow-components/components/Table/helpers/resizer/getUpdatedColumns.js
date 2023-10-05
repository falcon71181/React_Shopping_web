"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUpdatedColumns;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getTotalWidthsMetadata = _interopRequireDefault(require("./getTotalWidthsMetadata"));

var _getExpectedTableWidth = _interopRequireDefault(require("./getExpectedTableWidth"));

var _getExpectedFlexibleColumnWidth = _interopRequireDefault(require("./getExpectedFlexibleColumnWidth"));

var _getColumnWidthFromDef = _interopRequireDefault(require("./getColumnWidthFromDef"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getUpdatedColumns(params) {
  var columns = params.columns,
      domTableWidth = params.domTableWidth,
      minColumnWidth = params.minColumnWidth,
      maxColumnWidth = params.maxColumnWidth;
  var widthsMeta = (0, _getTotalWidthsMetadata["default"])({
    columns: columns,
    minColumnWidth: Number(minColumnWidth),
    maxColumnWidth: Number(maxColumnWidth)
  });
  var expectedTableWidth = (0, _getExpectedTableWidth["default"])(domTableWidth, widthsMeta);
  var expectedFlexibleColumnWidth = (0, _getExpectedFlexibleColumnWidth["default"])(widthsMeta, expectedTableWidth);
  return columns.map(function (column) {
    return _objectSpread(_objectSpread({}, column), {}, {
      computedWidth: (0, _getColumnWidthFromDef["default"])(column) || expectedFlexibleColumnWidth
    });
  });
}