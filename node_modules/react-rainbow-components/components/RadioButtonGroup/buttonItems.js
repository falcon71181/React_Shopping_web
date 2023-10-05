"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonItems;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radioButtonItem = _interopRequireDefault(require("./radioButtonItem"));

function ButtonItems(props) {
  var options = props.options,
      ariaDescribedby = props.ariaDescribedby,
      onChange = props.onChange,
      value = props.value,
      name = props.name,
      required = props.required,
      variant = props.variant,
      size = props.size;

  var isChecked = function isChecked(option) {
    return option.value === value;
  };

  return options.map(function (option, index) {
    var key = "radiobutton-".concat(index);
    return _react["default"].createElement(_radioButtonItem["default"], (0, _extends2["default"])({
      key: key,
      itemRef: option.optionRef,
      required: required,
      onChange: onChange,
      isChecked: isChecked(option),
      ariaDescribedby: ariaDescribedby,
      name: name,
      variant: variant,
      size: size
    }, option));
  });
}

ButtonItems.propTypes = {
  ariaDescribedby: _propTypes["default"].string,
  value: _propTypes["default"].string,
  options: _propTypes["default"].array.isRequired,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired,
  required: _propTypes["default"].bool.isRequired,
  variant: _propTypes["default"].oneOf(['default', 'inverse', 'brand'])
};
ButtonItems.defaultProps = {
  ariaDescribedby: undefined,
  value: undefined,
  onChange: function onChange() {},
  variant: 'default'
};