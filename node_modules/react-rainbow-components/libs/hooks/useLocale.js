"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useLocale;

var _react = require("react");

var _context = require("../../components/Application/context");

var _getBrowserLocale = _interopRequireDefault(require("../utils/getBrowserLocale"));

function useLocale(localProp) {
  var context = (0, _react.useContext)(_context.AppContext);
  return (0, _react.useMemo)(function () {
    return localProp || context && context.locale || (0, _getBrowserLocale["default"])();
  }, [localProp, context]);
}