import React from 'react';
import PropTypes from 'prop-types';

function SvgFinland(_ref) {
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
    d: "M31.865 13.913H12.522V.38c-1.479.328-2.88.86-4.174 1.565v11.968H.135a16.138 16.138 0 000 4.174h8.213v11.968a15.891 15.891 0 004.174 1.565V18.087h19.343a16.16 16.16 0 000-4.174z",
    fill: "#0052B4"
  })));
}

SvgFinland.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgFinland.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgFinland;