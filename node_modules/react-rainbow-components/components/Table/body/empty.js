"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Empty;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emptyContainer = _interopRequireDefault(require("./styled/emptyContainer"));

var _emptyIcon = _interopRequireDefault(require("./styled/emptyIcon"));

var _emptyTitle = _interopRequireDefault(require("./styled/emptyTitle"));

var _emptyDescription = _interopRequireDefault(require("./styled/emptyDescription"));

var _td = _interopRequireDefault(require("./styled/td"));

function Empty(props) {
  var emptyIcon = props.emptyIcon,
      emptyTitle = props.emptyTitle,
      emptyDescription = props.emptyDescription,
      columnsLength = props.columnsLength;
  return _react["default"].createElement("tr", null, _react["default"].createElement(_td["default"], {
    colSpan: columnsLength
  }, _react["default"].createElement(_emptyContainer["default"], null, _react["default"].createElement(_emptyIcon["default"], null, emptyIcon), _react["default"].createElement(_emptyTitle["default"], null, emptyTitle), _react["default"].createElement(_emptyDescription["default"], null, emptyDescription))));
}

Empty.propTypes = {
  columnsLength: _propTypes["default"].number,
  emptyIcon: _propTypes["default"].node,
  emptyTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  emptyDescription: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Empty.defaultProps = {
  columnsLength: 0,
  emptyIcon: undefined,
  emptyTitle: undefined,
  emptyDescription: undefined
};