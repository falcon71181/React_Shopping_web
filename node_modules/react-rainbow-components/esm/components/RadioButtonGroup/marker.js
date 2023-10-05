import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledMarkerContainer from './styled/markerContainer';
import StyledMarker from './styled/marker';
export default function Marker(props) {
  var style = props.style,
      isVisible = props.isVisible,
      variant = props.variant,
      size = props.size,
      borderRadius = props.borderRadius;

  var markerStyle = _objectSpread(_objectSpread({}, style), {}, {
    opacity: isVisible ? 1 : 0
  });

  return React.createElement(RenderIf, {
    isTrue: isVisible
  }, React.createElement(StyledMarkerContainer, {
    size: size
  }, React.createElement(StyledMarker, {
    variant: variant,
    size: size,
    style: markerStyle,
    borderRadius: borderRadius
  })));
}
Marker.propTypes = {
  style: PropTypes.object,
  isVisible: PropTypes.any,
  variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Marker.defaultProps = {
  style: undefined,
  isVisible: false,
  variant: 'default',
  size: 'medium',
  borderRadius: 'rounded'
};