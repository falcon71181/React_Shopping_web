import React from 'react';
import PropTypes from 'prop-types';

function SvgPoland(_ref) {
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
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16",
    fill: "#D80027"
  })));
}

SvgPoland.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgPoland.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgPoland;