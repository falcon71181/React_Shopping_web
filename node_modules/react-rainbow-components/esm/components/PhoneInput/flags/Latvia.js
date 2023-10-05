import React from 'react';
import PropTypes from 'prop-types';

function SvgLatvia(_ref) {
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
  }), React.createElement("g", {
    fill: "#A2001D"
  }, React.createElement("path", {
    d: "M16 0C8.608 0 2.387 5.014.551 11.826H31.45C29.613 5.014 23.392 0 16 0zM16 32c7.392 0 13.613-5.014 15.449-11.826H.55C2.387 26.986 8.608 32 16 32z"
  }))));
}

SvgLatvia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgLatvia.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgLatvia;