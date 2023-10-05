"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckboxList;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isOptionSelected = _interopRequireDefault(require("./isOptionSelected"));

var _checkbox = _interopRequireDefault(require("../Input/inputCheckbox/checkbox"));

var _itemContainer = _interopRequireDefault(require("../RadioGroup/styled/itemContainer"));

var _itemDescription = _interopRequireDefault(require("../RadioGroup/styled/itemDescription"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _excluded = ["description"];

function CheckboxList(props) {
  var values = props.values,
      options = props.options,
      onChange = props.onChange,
      describedBy = props.describedBy,
      name = props.name,
      error = props.error;
  return options.map(function (option, index) {
    var key = "checkbox-".concat(index);
    var description = option.description,
        rest = (0, _objectWithoutProperties2["default"])(option, _excluded);
    return _react["default"].createElement(_itemContainer["default"], {
      key: key,
      "data-id": "input-checkboxgroup_container"
    }, _react["default"].createElement(_checkbox["default"], (0, _extends2["default"])({}, rest, {
      checked: (0, _isOptionSelected["default"])(values, option),
      onChange: onChange,
      ariaDescribedBy: describedBy,
      name: name,
      error: error
    })), _react["default"].createElement(_RenderIf["default"], {
      isTrue: description
    }, _react["default"].createElement(_itemDescription["default"], null, description)));
  });
}

CheckboxList.propTypes = {
  name: _propTypes["default"].string,
  options: _propTypes["default"].array.isRequired,
  values: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  describedBy: _propTypes["default"].string
};
CheckboxList.defaultProps = {
  values: [],
  onChange: function onChange() {},
  describedBy: undefined,
  name: undefined
};