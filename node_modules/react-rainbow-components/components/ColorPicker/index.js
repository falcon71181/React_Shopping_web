"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _styled = require("./styled");

var _normalizeColor = _interopRequireDefault(require("./helpers/normalizeColor"));

var _useNormalizeColors = _interopRequireDefault(require("./hooks/useNormalizeColors"));

var _variants = require("./variants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var variantMap = {
  "default": _variants.Default,
  'colors-fixed': _variants.ColorsFixed
};

var ColorPicker = _react["default"].forwardRef(function (props, ref) {
  var id = props.id,
      value = props.value,
      defaultColors = props.defaultColors,
      variant = props.variant,
      tabIndex = props.tabIndex,
      onChange = props.onChange,
      className = props.className,
      style = props.style;
  var color = (0, _normalizeColor["default"])(value);
  var colors = (0, _useNormalizeColors["default"])({
    defaultColors: defaultColors,
    variant: variant
  });

  var context = _objectSpread(_objectSpread({}, color), {}, {
    colors: colors,
    tabIndex: tabIndex,
    onChange: onChange
  });

  var Variant = variantMap[variant] || _variants.Default;
  return _react["default"].createElement(_styled.StyledContainer, {
    className: className,
    style: style,
    id: id
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, _react["default"].createElement(Variant, {
    ref: ref
  })));
});

ColorPicker.propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].shape({
    hex: _propTypes["default"].string,
    rgba: _propTypes["default"].arrayOf(_propTypes["default"].number),
    hsv: _propTypes["default"].arrayOf(_propTypes["default"].number)
  }),
  defaultColors: _propTypes["default"].array,
  variant: _propTypes["default"].oneOf(['default', 'colors-fixed']),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
ColorPicker.defaultProps = {
  id: undefined,
  value: {
    hex: '#000000'
  },
  defaultColors: ['#e3aaec', '#c3dbf7', '#9fd6ff', '#9de7da', '#9ef0bf', '#fef199', '#fdd499', '#d174e0', '#86baf3', '#5ebbff', '#42d8be', '#3be282', '#ffe654', '#ffb758', '#bd35bd', '#5779c1', '#4A90E2', '#06aea9', '#3dba4c', '#f5bc24', '#f99222', '#570e8c', '#021970', '#0b2399', '#0d7477', '#0a6b50', '#b67e12', '#b75d0c'],
  variant: 'default',
  tabIndex: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};
var _default = ColorPicker;
exports["default"] = _default;