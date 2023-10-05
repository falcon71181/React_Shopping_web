"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadioItems;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radio = _interopRequireDefault(require("../Input/inputRadio/radio"));

var _itemContainer = _interopRequireDefault(require("./styled/itemContainer"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _itemDescription = _interopRequireDefault(require("./styled/itemDescription"));

var _excluded = ["description", "disabled"];

function RadioItems(props) {
  var options = props.options,
      ariaDescribedby = props.ariaDescribedby,
      onChange = props.onChange,
      value = props.value,
      name = props.name,
      error = props.error;

  var isChecked = function isChecked(option) {
    return option.value === value;
  };

  return options.map(function (option, index) {
    var key = "radio-".concat(index);
    var description = option.description,
        disabled = option.disabled,
        rest = (0, _objectWithoutProperties2["default"])(option, _excluded);
    return _react["default"].createElement(_itemContainer["default"], {
      key: key,
      "data-id": "input-radiogroup_container"
    }, _react["default"].createElement(_radio["default"], (0, _extends2["default"])({}, rest, {
      onChange: onChange,
      checked: isChecked(option),
      ariaDescribedby: ariaDescribedby,
      name: name,
      error: error,
      disabled: disabled
    })), _react["default"].createElement(_RenderIf["default"], {
      isTrue: description
    }, _react["default"].createElement(_itemDescription["default"], {
      disabled: disabled
    }, description)));
  });
}

RadioItems.propTypes = {
  ariaDescribedby: _propTypes["default"].string,
  value: _propTypes["default"].string,
  options: _propTypes["default"].array.isRequired,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired
};
RadioItems.defaultProps = {
  ariaDescribedby: undefined,
  value: undefined,
  onChange: function onChange() {}
};