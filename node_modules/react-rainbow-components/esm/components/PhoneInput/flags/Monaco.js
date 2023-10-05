import React from 'react';
import PropTypes from 'prop-types';

function SvgMonaco(_ref) {
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
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16",
    fill: "#D80027"
  })));
}

SvgMonaco.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgMonaco.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgMonaco;