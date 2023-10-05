"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headerTitle = _interopRequireDefault(require("./headerTitle"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _headerContainer = _interopRequireDefault(require("./styled/headerContainer"));

var _header = _interopRequireDefault(require("./styled/header"));

var _icon = _interopRequireDefault(require("./styled/icon"));

function Header(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      actions = _ref.actions;
  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon || title || actions
  }, _react["default"].createElement(_headerContainer["default"], null, _react["default"].createElement(_header["default"], null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_icon["default"], null, icon)), _react["default"].createElement(_headerTitle["default"], {
    title: title
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: actions
  }, _react["default"].createElement("div", null, actions))));
}

Header.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  actions: _propTypes["default"].node
};
Header.defaultProps = {
  title: null,
  icon: null,
  actions: null
};