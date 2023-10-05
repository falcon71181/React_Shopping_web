"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GoogleAddressLookup;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAsyncScriptLoader = _interopRequireDefault(require("react-async-script-loader"));

var _component = _interopRequireDefault(require("./component"));

var CustomPropTypes = _interopRequireWildcard(require("./proptypes"));

var _excluded = ["apiKey"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';

function GoogleAddressLookup(props) {
  var apiKey = props.apiKey,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var Component = (0, _react.useCallback)((0, _reactAsyncScriptLoader["default"])("".concat(googleMapApiUrl, "?key=").concat(apiKey, "&libraries=places"))(_component["default"]), [apiKey]);
  return _react["default"].createElement(Component, rest);
}

GoogleAddressLookup.propTypes = {
  apiKey: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([CustomPropTypes.predictionShape, CustomPropTypes.placeDetailsShape, _propTypes["default"].string]),
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  searchOptions: CustomPropTypes.searchOptionsShape,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
GoogleAddressLookup.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  placeholder: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  tabIndex: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  searchOptions: {},
  variant: 'default',
  borderRadius: 'rounded'
};