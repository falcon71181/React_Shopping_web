"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getColumns;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getDefaultWidth(defaultWidth, minColumnWidth, maxColumnWidth) {
  var minColWidth = Number(minColumnWidth);
  var maxColWidth = Number(maxColumnWidth);
  var defaultWidtNumber = Number(defaultWidth);

  if (minColWidth >= defaultWidtNumber) {
    return minColWidth;
  }

  if (maxColWidth <= defaultWidtNumber) {
    return maxColWidth;
  }

  return defaultWidtNumber || undefined;
}

function getColumns(params) {
  var _params$children = params.children,
      children = _params$children === void 0 ? [] : _params$children,
      showCheckboxColumn = params.showCheckboxColumn,
      showRowNumberColumn = params.showRowNumberColumn,
      rowNumberOffset = params.rowNumberOffset,
      minColumnWidth = params.minColumnWidth,
      maxColumnWidth = params.maxColumnWidth,
      variant = params.variant;
  var configColumns = [];

  if (showRowNumberColumn) {
    configColumns.push({
      type: _.WITH_ENUMERABLE,
      rowNumberOffset: rowNumberOffset,
      width: (0, _.getEnumerableWidth)(rowNumberOffset, variant)
    });
  }

  if (showCheckboxColumn) {
    if (variant === 'listview') {
      configColumns.unshift({
        type: _.SELECTABLE_CHECKBOX,
        width: 42
      });
    } else {
      configColumns.push({
        type: _.SELECTABLE_CHECKBOX,
        width: 52
      });
    }
  }

  var columnsData = _react["default"].Children.map(children, function (column, index) {
    if (column && column.props) {
      var _column$props = column.props,
          type = _column$props.type,
          width = _column$props.width,
          defaultWidth = _column$props.defaultWidth;
      var widthNumber = Number(width);

      if (type === 'action') {
        return _objectSpread(_objectSpread({}, column.props), {}, {
          width: widthNumber || 75
        });
      }

      return _objectSpread(_objectSpread({}, column.props), {}, {
        width: widthNumber || undefined,
        defaultWidth: getDefaultWidth(defaultWidth, minColumnWidth, maxColumnWidth),
        isFirstDataColumn: index === 0
      });
    }

    return null;
  }, null);

  if (configColumns.length) {
    return configColumns.concat(columnsData);
  }

  return columnsData;
}