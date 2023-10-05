"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cardBody = _interopRequireDefault(require("./cardBody"));

var _header = _interopRequireDefault(require("./header"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("./styled/container"));

var _footer = _interopRequireDefault(require("./styled/footer"));

function Card(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      actions = props.actions,
      children = props.children,
      footer = props.footer,
      title = props.title,
      icon = props.icon,
      isLoading = props.isLoading;
  var hasHeader = icon || title || actions;
  var showFooter = !!(footer && !isLoading);
  return _react["default"].createElement(_container["default"], {
    id: id,
    className: className,
    style: style,
    hasHeader: hasHeader
  }, _react["default"].createElement(_header["default"], {
    actions: actions,
    title: title,
    icon: icon
  }), _react["default"].createElement(_cardBody["default"], {
    isLoading: isLoading
  }, children), _react["default"].createElement(_RenderIf["default"], {
    isTrue: showFooter
  }, _react["default"].createElement(_footer["default"], null, footer)));
}

Card.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  actions: _propTypes["default"].node,
  footer: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node,
  isLoading: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string
};
Card.defaultProps = {
  title: null,
  icon: null,
  actions: null,
  footer: null,
  isLoading: false,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};