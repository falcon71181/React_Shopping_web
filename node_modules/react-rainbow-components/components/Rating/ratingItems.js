"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RatingItems;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _star = _interopRequireDefault(require("./star"));

function RatingItems(props) {
  var onChange = props.onChange,
      value = props.value,
      name = props.name,
      readOnly = props.readOnly,
      required = props.required,
      describedBy = props.describedBy;
  return Array(5).fill(0).map(function (item, index) {
    var key = "star-".concat(index);
    var normalizedValue = readOnly ? Math.ceil(value) : Math.round(value);
    var isFilled = index < normalizedValue;
    var isHalf = readOnly && Number(value) < index + 1 && !Number.isInteger(Number(value));
    return _react["default"].createElement(_star["default"], {
      key: key,
      name: name,
      onChange: onChange,
      value: index + 1,
      isFilled: isFilled,
      isHalf: isHalf,
      readOnly: readOnly,
      required: required,
      describedBy: describedBy
    });
  });
}

RatingItems.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  describedBy: _propTypes["default"].string
};
RatingItems.defaultProps = {
  value: 0,
  onChange: function onChange() {},
  name: undefined,
  readOnly: false,
  required: false,
  describedBy: undefined
};