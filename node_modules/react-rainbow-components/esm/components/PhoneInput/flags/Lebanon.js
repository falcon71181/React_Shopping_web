import React from 'react';
import PropTypes from 'prop-types';

function SvgLebanon(_ref) {
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
    fill: "#D80027"
  }, React.createElement("path", {
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z"
  })), React.createElement("path", {
    fill: "#6DA544",
    d: "M20.174 18.783L16 11.13l-4.174 7.653h3.13v2.087h2.088v-2.087z"
  })));
}

SvgLebanon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgLebanon.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgLebanon;