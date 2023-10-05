"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavigationButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./styled/button"));

var _li = _interopRequireDefault(require("./styled/li"));

function NavigationButton(props) {
  var onClick = props.onClick,
      icon = props.icon,
      disabled = props.disabled,
      dataId = props.dataId,
      ariaLabel = props.ariaLabel,
      variant = props.variant;

  var handleOnClick = function handleOnClick(event) {
    if (!disabled) {
      onClick(event);
    }
  };

  var getTabIndex = function getTabIndex() {
    if (disabled) {
      return -1;
    }

    return 0;
  };

  return _react["default"].createElement(_li["default"], null, _react["default"].createElement(_button["default"], {
    disabled: disabled,
    "data-id": dataId,
    onClick: handleOnClick,
    "aria-disabled": !!disabled,
    tabIndex: getTabIndex(),
    "aria-label": ariaLabel,
    variant: variant
  }, icon));
}

NavigationButton.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  icon: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool,
  dataId: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'shaded'])
};
NavigationButton.defaultProps = {
  disabled: false,
  dataId: undefined,
  ariaLabel: undefined,
  variant: 'default'
};