"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EmptyMessage;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

function EmptyMessage(_ref) {
  var searchValue = _ref.searchValue,
      hasTimeout = _ref.hasTimeout;
  var hasSearch = searchValue && !hasTimeout;
  var message = hasSearch ? 'Our robots did not find any match for:' : 'Type something to search';
  return _react["default"].createElement(_styled.MessageContainer, {
    "data-id": "internal-dropdown-empty-message"
  }, _react["default"].createElement(_styled.StyledSearchIcon, null), _react["default"].createElement(_styled.MessageDescription, null, message), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasSearch
  }, _react["default"].createElement(_styled.MessageHighLight, null, " \u201C", searchValue, "\u201D")));
}

EmptyMessage.propTypes = {
  searchValue: _propTypes["default"].string,
  hasTimeout: _propTypes["default"].bool
};
EmptyMessage.defaultProps = {
  searchValue: undefined,
  hasTimeout: false
};