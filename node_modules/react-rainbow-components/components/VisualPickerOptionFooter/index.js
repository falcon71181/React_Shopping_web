"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VisualPickerOptionFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("./styled/container"));

var _label = _interopRequireDefault(require("./styled/label"));

var _description = _interopRequireDefault(require("./styled/description"));

function VisualPickerOptionFooter(props) {
  var label = props.label,
      description = props.description,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_label["default"], null, label)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: description
  }, _react["default"].createElement(_description["default"], null, description)));
}

VisualPickerOptionFooter.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
VisualPickerOptionFooter.defaultProps = {
  label: '',
  description: '',
  className: undefined,
  style: undefined
};