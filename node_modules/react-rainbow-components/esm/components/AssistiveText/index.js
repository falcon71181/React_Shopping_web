import React from 'react';
import PropTypes from 'prop-types';
import HiddenElement from '../Structural/hiddenElement';
export default function AssistiveText(_ref) {
  var text = _ref.text;

  if (text) {
    return React.createElement(HiddenElement, null, text);
  }

  return null;
}
AssistiveText.propTypes = {
  text: PropTypes.string
};
AssistiveText.defaultProps = {
  text: undefined
};