"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _yearSelect = _interopRequireDefault(require("./yearSelect"));

function MonthHeader(props) {
  var id = props.id,
      label = props.label,
      currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      onYearChange = props.onYearChange;
  return _react["default"].createElement(_styled.StyledHeaderContainer, null, _react["default"].createElement(_styled.StyledMonth, {
    id: id,
    "data-id": "month"
  }, label), _react["default"].createElement(_yearSelect["default"], {
    currentYear: currentYear,
    yearsRange: yearsRange,
    onYearChange: onYearChange
  }));
}

MonthHeader.propTypes = {
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  currentYear: _propTypes["default"].number,
  yearsRange: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onYearChange: _propTypes["default"].func
};
MonthHeader.defaultProps = {
  id: undefined,
  label: undefined,
  currentYear: undefined,
  yearsRange: undefined,
  onYearChange: function onYearChange() {}
};