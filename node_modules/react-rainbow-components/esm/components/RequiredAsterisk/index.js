import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledAsterisk from './styledAsterisk';
export default function RequiredAsterisk(_ref) {
  var required = _ref.required;
  return React.createElement(RenderIf, {
    isTrue: required
  }, React.createElement(StyledAsterisk, {
    title: "required"
  }, "* "));
}
RequiredAsterisk.propTypes = {
  required: PropTypes.bool.isRequired
};