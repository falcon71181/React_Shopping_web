"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatDateTime;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var FORMATS = {
  small: {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric'
  },
  medium: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  },
  large: {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
};
var timeFormat12h = {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit'
};
var timeFormat24h = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
};

function formatDateTime(date) {
  var formatStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var hour24 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (date) {
    try {
      var options = FORMATS[formatStyle] || FORMATS.medium;
      var value = typeof date === 'string' ? new Date(date) : date;
      var timeFormat = hour24 ? timeFormat24h : timeFormat12h;
      return new Intl.DateTimeFormat(locale, _objectSpread(_objectSpread({}, options), timeFormat)).format(value);
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  return '';
}