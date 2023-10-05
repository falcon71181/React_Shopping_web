import React from 'react';
import PropTypes from 'prop-types';

function SvgSwitzerland(_ref) {
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
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("path", {
    fill: "#F0F0F0",
    d: "M24.348 13.217h-5.565V7.652h-5.566v5.565H7.652v5.566h5.565v5.565h5.566v-5.565h5.565z"
  })));
}

SvgSwitzerland.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgSwitzerland.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgSwitzerland;