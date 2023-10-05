"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Marker;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _markerContainer = _interopRequireDefault(require("./styled/markerContainer"));

var _marker = _interopRequireDefault(require("./styled/marker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Marker(props) {
  var style = props.style,
      isVisible = props.isVisible,
      variant = props.variant,
      size = props.size,
      borderRadius = props.borderRadius;

  var markerStyle = _objectSpread(_objectSpread({}, style), {}, {
    opacity: isVisible ? 1 : 0
  });

  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: isVisible
  }, _react["default"].createElement(_markerContainer["default"], {
    size: size
  }, _react["default"].createElement(_marker["default"], {
    variant: variant,
    size: size,
    style: markerStyle,
    borderRadius: borderRadius
  })));
}

Marker.propTypes = {
  style: _propTypes["default"].object,
  isVisible: _propTypes["default"].any,
  variant: _propTypes["default"].oneOf(['default', 'inverse', 'brand']),
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Marker.defaultProps = {
  style: undefined,
  isVisible: false,
  variant: 'default',
  size: 'medium',
  borderRadius: 'rounded'
};