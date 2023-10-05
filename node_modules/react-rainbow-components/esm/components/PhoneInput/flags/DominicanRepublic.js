import React from 'react';
import PropTypes from 'prop-types';

function SvgDominicanRepublic(_ref) {
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
    d: "M.551 20.174a16.028 16.028 0 0011.275 11.275V20.174H.551z",
    fill: "#D80027"
  }), React.createElement("path", {
    d: "M11.826.551A16.028 16.028 0 00.551 11.826h11.275V.551z",
    fill: "#0052B4"
  }), React.createElement("path", {
    d: "M31.449 11.826A16.028 16.028 0 0020.174.551v11.275h11.275z",
    fill: "#D80027"
  }), React.createElement("path", {
    d: "M20.174 31.449a16.028 16.028 0 0011.275-11.275H20.174v11.275z",
    fill: "#0052B4"
  }), React.createElement("path", {
    d: "M20.174 16a4.174 4.174 0 11-8.348 0c0-2.305 4.174-4.174 4.174-4.174s4.174 1.869 4.174 4.174z",
    fill: "#496E2D"
  }), React.createElement("path", {
    d: "M11.826 16a4.174 4.174 0 118.348 0",
    fill: "#0052B4"
  }), React.createElement("path", {
    d: "M13.652 13.913v2.609a2.348 2.348 0 104.696 0v-2.609h-4.696z",
    fill: "#D80027"
  })));
}

SvgDominicanRepublic.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgDominicanRepublic.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgDominicanRepublic;