"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _title = _interopRequireDefault(require("./styled/title"));

function HeaderTitle(_ref) {
  var title = _ref.title;

  if (typeof title === 'string') {
    return _react["default"].createElement(_title["default"], null, title);
  }

  return title;
}

HeaderTitle.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
HeaderTitle.defaultProps = {
  title: null
};