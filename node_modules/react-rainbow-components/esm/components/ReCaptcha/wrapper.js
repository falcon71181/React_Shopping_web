import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["isScriptLoaded", "isScriptLoadSucceed"];
import React from 'react';
import PropTypes from 'prop-types';
import ReCaptchaComponent from './component';
export default function ReCaptchaWrapper(props) {
  var isScriptLoaded = props.isScriptLoaded,
      isScriptLoadSucceed = props.isScriptLoadSucceed,
      rest = _objectWithoutProperties(props, _excluded);

  var shouldRender = isScriptLoaded && isScriptLoadSucceed;

  if (shouldRender) {
    return React.createElement(ReCaptchaComponent, rest);
  }

  return null;
}
ReCaptchaWrapper.propTypes = {
  isScriptLoaded: PropTypes.bool,
  isScriptLoadSucceed: PropTypes.bool
};
ReCaptchaWrapper.defaultProps = {
  isScriptLoaded: false,
  isScriptLoadSucceed: false
};