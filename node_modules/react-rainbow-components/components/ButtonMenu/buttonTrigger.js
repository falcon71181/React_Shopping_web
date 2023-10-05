"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styledLeftIcon = _interopRequireDefault(require("./styled/styledLeftIcon"));

var _styledRightIcon = _interopRequireDefault(require("./styled/styledRightIcon"));

var _excluded = ["label", "icon", "iconPosition"];

var ButtonTrigger = _react["default"].forwardRef(function (props, ref) {
  var label = props.label,
      icon = props.icon,
      iconPosition = props.iconPosition,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var hasLeftIcon = icon && iconPosition !== 'right';
  var hasRightIcon = icon && iconPosition === 'right';

  if (label) {
    return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({}, rest, {
      ref: ref
    }), _react["default"].createElement(_RenderIf["default"], {
      isTrue: hasLeftIcon
    }, _react["default"].createElement(_styledLeftIcon["default"], null, icon)), label, _react["default"].createElement(_RenderIf["default"], {
      isTrue: hasRightIcon
    }, _react["default"].createElement(_styledRightIcon["default"], null, icon)));
  }

  return _react["default"].createElement(_ButtonIcon["default"], (0, _extends2["default"])({}, rest, {
    icon: icon,
    ref: ref
  }));
});

ButtonTrigger.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right'])
};
ButtonTrigger.defaultProps = {
  label: undefined,
  icon: null,
  iconPosition: 'left'
};
var _default = ButtonTrigger;
exports["default"] = _default;