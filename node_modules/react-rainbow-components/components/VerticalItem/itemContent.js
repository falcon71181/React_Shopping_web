"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _label = _interopRequireDefault(require("./styled/label"));

var _notification = _interopRequireDefault(require("./styled/notification"));

function ItemContent(_ref) {
  var label = _ref.label,
      notification = _ref.notification;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_label["default"], null, label), _react["default"].createElement(_RenderIf["default"], {
    isTrue: notification
  }, _react["default"].createElement(_notification["default"], null, notification)));
}

ItemContent.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  notification: _propTypes["default"].node
};
ItemContent.defaultProps = {
  label: '',
  notification: undefined
};