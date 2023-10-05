"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _faux = _interopRequireDefault(require("./styled/faux"));

var _hiddenElement = _interopRequireDefault(require("../Structural/hiddenElement"));

function Label(props) {
  var label = props.label,
      inputId = props.inputId;
  return _react["default"].createElement("label", {
    "data-id": "table-input-checkbox_label",
    htmlFor: inputId
  }, _react["default"].createElement(_faux["default"], {
    className: "rainbow-table-input-checkbox_faux"
  }), _react["default"].createElement(_hiddenElement["default"], null, label));
}

Label.propTypes = {
  label: _propTypes["default"].node.isRequired,
  inputId: _propTypes["default"].string.isRequired
};