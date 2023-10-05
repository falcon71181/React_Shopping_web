"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _title = _interopRequireDefault(require("./styled/title"));

var _divider = _interopRequireDefault(require("./styled/divider"));

function Header(_ref) {
  var content = _ref.content,
      id = _ref.id;

  if (typeof content === 'string') {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_title["default"], {
      id: id
    }, content), _react["default"].createElement(_divider["default"], null));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, content);
}

Header.propTypes = {
  id: _propTypes["default"].string,
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Header.defaultProps = {
  id: undefined,
  content: undefined
};