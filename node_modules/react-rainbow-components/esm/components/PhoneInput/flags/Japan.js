import React from 'react';
import PropTypes from 'prop-types';

function SvgJapan(_ref) {
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
  }), React.createElement("circle", {
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 6.957
  })));
}

SvgJapan.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgJapan.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgJapan;