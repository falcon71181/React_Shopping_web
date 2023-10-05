"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Counter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _counter = _interopRequireDefault(require("./styled/counter"));

var _utils = require("../../libs/utils");

function Counter(props) {
  var avatars = props.avatars,
      size = props.size;
  var total = avatars.length;
  return _react["default"].createElement(_counter["default"], {
    size: size
  }, _react["default"].createElement("h1", null, (0, _utils.getSuffixSI)(total)));
}

Counter.propTypes = {
  avatars: _propTypes["default"].array,
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large'])
};
Counter.defaultProps = {
  avatars: [],
  size: 'medium'
};