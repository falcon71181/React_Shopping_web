import React from 'react';
import PropTypes from 'prop-types';
export default function Options(_ref) {
  var pages = _ref.pages;
  var options = [];
  var count = 1;

  while (count <= pages) {
    options.push(React.createElement("option", {
      key: count
    }, count));
    count += 1;
  }

  return options;
}
Options.propTypes = {
  pages: PropTypes.number.isRequired
};