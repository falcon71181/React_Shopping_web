"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("./styled/header"));

var _title = _interopRequireDefault(require("./styled/title"));

function Header(_ref) {
  var title = _ref.title,
      id = _ref.id;

  if (typeof title === 'string') {
    return _react["default"].createElement(_header["default"], null, _react["default"].createElement(_title["default"], {
      id: id
    }, title));
  }

  return title;
}

Header.propTypes = {
  id: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Header.defaultProps = {
  id: undefined,
  title: undefined
};