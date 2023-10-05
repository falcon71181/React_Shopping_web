import React from 'react';
import PropTypes from 'prop-types';

function SvgHaiti(_ref) {
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
  }, React.createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 16 0 16 0s16 7.163 16 16z",
    fill: "#A2001D"
  }), React.createElement("path", {
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16",
    fill: "#0052B4"
  }), React.createElement("path", {
    fill: "#F0F0F0",
    d: "M21.565 20.174L16 19.478l-5.565.696v-8.348h11.13z"
  }), React.createElement("circle", {
    fill: "#0052B4",
    cx: 16,
    cy: 16.696,
    r: 2.783
  }), React.createElement("circle", {
    fill: "#A2001D",
    cx: 16,
    cy: 16.696,
    r: 1.391
  }), React.createElement("path", {
    fill: "#6DA544",
    d: "M13.913 13.217h4.174L16 15.304z"
  }), React.createElement("path", {
    fill: "#FFDA44",
    d: "M15.304 14.609h1.391v4.174h-1.391z"
  }), React.createElement("path", {
    fill: "#6DA544",
    d: "M18.226 18.365h-4.452l-3.34 1.809h11.131z"
  })));
}

SvgHaiti.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgHaiti.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgHaiti;