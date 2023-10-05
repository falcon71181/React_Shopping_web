import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import getTotalWidthsMetadata from './getTotalWidthsMetadata';
import getExpectedTableWidth from './getExpectedTableWidth';
import getExpectedFlexibleColumnWidth from './getExpectedFlexibleColumnWidth';
import getColumnWidthFromDef from './getColumnWidthFromDef';
export default function getUpdatedColumns(params) {
  var columns = params.columns,
      domTableWidth = params.domTableWidth,
      minColumnWidth = params.minColumnWidth,
      maxColumnWidth = params.maxColumnWidth;
  var widthsMeta = getTotalWidthsMetadata({
    columns: columns,
    minColumnWidth: Number(minColumnWidth),
    maxColumnWidth: Number(maxColumnWidth)
  });
  var expectedTableWidth = getExpectedTableWidth(domTableWidth, widthsMeta);
  var expectedFlexibleColumnWidth = getExpectedFlexibleColumnWidth(widthsMeta, expectedTableWidth);
  return columns.map(function (column) {
    return _objectSpread(_objectSpread({}, column), {}, {
      computedWidth: getColumnWidthFromDef(column) || expectedFlexibleColumnWidth
    });
  });
}