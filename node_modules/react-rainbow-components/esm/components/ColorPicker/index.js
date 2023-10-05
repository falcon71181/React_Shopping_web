import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { StyledContainer } from './styled';
import normalizeColor from './helpers/normalizeColor';
import useNormalizeColors from './hooks/useNormalizeColors';
import { Default, ColorsFixed } from './variants';
var variantMap = {
  "default": Default,
  'colors-fixed': ColorsFixed
};
var ColorPicker = React.forwardRef(function (props, ref) {
  var id = props.id,
      value = props.value,
      defaultColors = props.defaultColors,
      variant = props.variant,
      tabIndex = props.tabIndex,
      onChange = props.onChange,
      className = props.className,
      style = props.style;
  var color = normalizeColor(value);
  var colors = useNormalizeColors({
    defaultColors: defaultColors,
    variant: variant
  });

  var context = _objectSpread(_objectSpread({}, color), {}, {
    colors: colors,
    tabIndex: tabIndex,
    onChange: onChange
  });

  var Variant = variantMap[variant] || Default;
  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    id: id
  }, React.createElement(Provider, {
    value: context
  }, React.createElement(Variant, {
    ref: ref
  })));
});
ColorPicker.propTypes = {
  id: PropTypes.string,
  value: PropTypes.shape({
    hex: PropTypes.string,
    rgba: PropTypes.arrayOf(PropTypes.number),
    hsv: PropTypes.arrayOf(PropTypes.number)
  }),
  defaultColors: PropTypes.array,
  variant: PropTypes.oneOf(['default', 'colors-fixed']),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
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
export default ColorPicker;