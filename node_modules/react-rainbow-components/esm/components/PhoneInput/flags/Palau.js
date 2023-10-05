import React from 'react';
import PropTypes from 'prop-types';

function SvgPalau(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("circle", {
    fill: "#338AF3",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("circle", {
    fill: "#FFDA44",
    cx: 12.522,
    cy: 16,
    r: 6.957
  })));
}

SvgPalau.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgPalau.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgPalau;