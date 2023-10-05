import React from 'react';
import PropTypes from 'prop-types';

function SvgFrance(_ref) {
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
    d: "M.485 12.202C2.602 3.644 11.248-1.568 19.806.549c8.558 2.118 13.77 10.764 11.653 19.322-2.118 8.55-10.764 13.77-19.322 11.652C3.587 29.398-1.633 20.752.485 12.202",
    fill: "#F1F2F2"
  }), React.createElement("path", {
    d: "M10.626 1.002C5.754 2.739 1.818 6.804.485 12.202c-1.988 8.04 2.497 16.162 10.141 18.869V1.002z",
    fill: "#223C72"
  }), React.createElement("path", {
    d: "M21.341 1.01v30.045c4.857-1.746 8.784-5.802 10.118-11.192 1.987-8.025-2.49-16.138-10.118-18.853",
    fill: "#EF3827"
  })));
}

SvgFrance.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgFrance.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgFrance;