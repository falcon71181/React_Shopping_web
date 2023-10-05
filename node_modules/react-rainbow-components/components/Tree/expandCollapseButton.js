"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandCollapseButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./styled/button"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _spinnerContainer = _interopRequireDefault(require("./styled/spinnerContainer"));

var _rightArrow = _interopRequireDefault(require("./icons/rightArrow"));

var _downArrow = _interopRequireDefault(require("./icons/downArrow"));

function getIcon(isExpanded) {
  if (isExpanded) {
    return _react["default"].createElement(_downArrow["default"], null);
  }

  return _react["default"].createElement(_rightArrow["default"], null);
}

function ExpandCollapseButton(props) {
  var hasChildren = props.hasChildren,
      isExpanded = props.isExpanded,
      isLoading = props.isLoading,
      onClick = props.onClick;

  if (isLoading) {
    return _react["default"].createElement(_spinnerContainer["default"], null, _react["default"].createElement(_Spinner["default"], {
      variant: "brand",
      type: "arc",
      size: "x-small"
    }));
  }

  if (hasChildren) {
    return _react["default"].createElement(_button["default"], {
      size: "x-small",
      icon: getIcon(isExpanded),
      onClick: onClick,
      tabIndex: -1
    });
  }

  return null;
}

ExpandCollapseButton.propTypes = {
  hasChildren: _propTypes["default"].bool.isRequired,
  isExpanded: _propTypes["default"].bool.isRequired,
  isLoading: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired
};