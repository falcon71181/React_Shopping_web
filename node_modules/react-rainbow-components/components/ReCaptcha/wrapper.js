"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReCaptchaWrapper;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = _interopRequireDefault(require("./component"));

var _excluded = ["isScriptLoaded", "isScriptLoadSucceed"];

function ReCaptchaWrapper(props) {
  var isScriptLoaded = props.isScriptLoaded,
      isScriptLoadSucceed = props.isScriptLoadSucceed,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var shouldRender = isScriptLoaded && isScriptLoadSucceed;

  if (shouldRender) {
    return _react["default"].createElement(_component["default"], rest);
  }

  return null;
}

ReCaptchaWrapper.propTypes = {
  isScriptLoaded: _propTypes["default"].bool,
  isScriptLoadSucceed: _propTypes["default"].bool
};
ReCaptchaWrapper.defaultProps = {
  isScriptLoaded: false,
  isScriptLoadSucceed: false
};