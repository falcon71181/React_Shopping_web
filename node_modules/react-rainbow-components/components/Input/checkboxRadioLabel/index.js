"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

var _labelText = _interopRequireDefault(require("./labelText"));

function Label(props) {
  var label = props.label,
      disabled = props.disabled,
      hideLabel = props.hideLabel,
      inputId = props.inputId,
      id = props.id;

  if (hideLabel) {
    return _react["default"].createElement("label", {
      htmlFor: inputId,
      id: id
    }, _react["default"].createElement("span", {
      className: "rainbow-input_faux"
    }), _react["default"].createElement(_hiddenElement["default"], null, label));
  }

  return _react["default"].createElement("label", {
    htmlFor: inputId,
    id: id
  }, _react["default"].createElement("span", {
    className: "rainbow-input_faux"
  }), _react["default"].createElement(_labelText["default"], {
    disabled: disabled
  }, label));
}

Label.propTypes = {
  label: _propTypes["default"].node,
  inputId: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  hideLabel: _propTypes["default"].bool,
  id: _propTypes["default"].string
};
Label.defaultProps = {
  label: undefined,
  inputId: undefined,
  disabled: false,
  hideLabel: false,
  id: undefined
};