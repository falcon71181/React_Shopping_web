"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RequiredAsterisk = _interopRequireDefault(require("../../RequiredAsterisk"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

var _labelText = _interopRequireDefault(require("./labelText"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

function Label(props) {
  var className = props.className,
      label = props.label,
      required = props.required,
      inputId = props.inputId,
      readOnly = props.readOnly,
      id = props.id,
      labelAlignment = props.labelAlignment,
      hideLabel = props.hideLabel,
      variant = props.variant,
      as = props.as,
      size = props.size;

  if (hideLabel) {
    return _react["default"].createElement(_hiddenElement["default"], {
      as: "label",
      htmlFor: inputId,
      id: id
    }, _react["default"].createElement(_RequiredAsterisk["default"], {
      required: required
    }), label);
  }

  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_labelText["default"], {
    className: className,
    readOnly: readOnly,
    labelAlignment: labelAlignment,
    htmlFor: inputId,
    as: as,
    id: id,
    variant: variant,
    size: size
  }, _react["default"].createElement(_RequiredAsterisk["default"], {
    required: required
  }), label));
}

Label.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].node,
  required: _propTypes["default"].bool,
  inputId: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  as: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'inverse']),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large'])
};
Label.defaultProps = {
  className: undefined,
  label: undefined,
  required: false,
  inputId: undefined,
  readOnly: false,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  as: undefined,
  variant: 'default',
  size: 'medium'
};