"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Spinner;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _circleSpinner = _interopRequireDefault(require("./styled/circleSpinner"));

var _arcSpinner = _interopRequireDefault(require("./styled/arcSpinner"));

var _spinnerContainer = _interopRequireDefault(require("./styled/spinnerContainer"));

var _childContainer = _interopRequireDefault(require("./styled/childContainer"));

var _getSizeValue = _interopRequireDefault(require("./helpers/getSizeValue"));

function Spinner(props) {
  var className = props.className,
      style = props.style,
      assistiveText = props.assistiveText,
      isVisible = props.isVisible,
      size = props.size,
      variant = props.variant,
      type = props.type,
      children = props.children;
  var currentSize = (0, _getSizeValue["default"])(size);

  if (isVisible) {
    if (type === 'arc') {
      return _react["default"].createElement(_spinnerContainer["default"], {
        className: className,
        style: style
      }, _react["default"].createElement(_arcSpinner["default"], {
        viewBox: "".concat(0, " ", 0, " ", currentSize, " ").concat(currentSize),
        size: size,
        variant: variant
      }, _react["default"].createElement("circle", {
        className: "path",
        cx: currentSize / 2,
        cy: currentSize / 2,
        r: (currentSize - 3) / 2,
        fill: "none",
        strokeWidth: "3"
      })), _react["default"].createElement(_childContainer["default"], null, children), _react["default"].createElement(_AssistiveText["default"], {
        text: assistiveText
      }));
    }

    return _react["default"].createElement(_circleSpinner["default"], {
      className: className,
      size: size,
      variant: variant,
      style: style
    }, _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement("div", null), _react["default"].createElement(_childContainer["default"], null, children), _react["default"].createElement(_AssistiveText["default"], {
      text: assistiveText
    }));
  }

  return null;
}

Spinner.propTypes = {
  variant: _propTypes["default"].oneOf(['base', 'brand', 'inverse', 'neutral']),
  size: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
  isVisible: _propTypes["default"].bool,
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['circle', 'arc']),
  children: _propTypes["default"].node
};
Spinner.defaultProps = {
  variant: 'base',
  size: 'medium',
  isVisible: true,
  assistiveText: null,
  className: undefined,
  style: undefined,
  type: 'circle',
  children: null
};