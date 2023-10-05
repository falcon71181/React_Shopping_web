"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUpdatedRowsWhenSelectAll;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getUpdatedRowsWhenSelectAll() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$rows = params.rows,
      rows = _params$rows === void 0 ? [] : _params$rows,
      maxRowSelection = params.maxRowSelection,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;
  return rows.map(function (row, index) {
    if (index < maxRowSelection) {
      selectedRowsKeys[row.key] = true;
      return _objectSpread(_objectSpread({}, row), {}, {
        isSelected: true
      });
    }

    return _objectSpread(_objectSpread({}, row), {}, {
      isSelected: false,
      isDisabled: true
    });
  });
}