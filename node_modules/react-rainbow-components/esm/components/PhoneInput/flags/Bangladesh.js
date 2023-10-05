import React from 'react';
import PropTypes from 'prop-types';

function SvgBangladesh(_ref) {
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
    fill: "#496E2D",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("circle", {
    fill: "#D80027",
    cx: 12.522,
    cy: 16,
    r: 6.957
  })));
}

SvgBangladesh.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgBangladesh.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgBangladesh;