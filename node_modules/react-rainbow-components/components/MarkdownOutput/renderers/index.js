"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineRenderer = exports.defaultRenderer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var Heading = function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children;
  return _react["default"].createElement(_styled.StyledHeading, {
    as: "h".concat(level),
    level: level
  }, children);
};

var InlineHeading = function InlineHeading(_ref2) {
  var level = _ref2.level,
      children = _ref2.children;
  return _react["default"].createElement(_styled.StyledInlineHeading, {
    as: "h".concat(level),
    level: level
  }, children);
};

var defaultRenderer = {
  h1: function h1(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 1
    }, props));
  },
  h2: function h2(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 2
    }, props));
  },
  h3: function h3(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 3
    }, props));
  },
  h4: function h4(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 4
    }, props));
  },
  h5: function h5(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 5
    }, props));
  },
  h6: function h6(props) {
    return _react["default"].createElement(Heading, (0, _extends2["default"])({
      level: 6
    }, props));
  },
  code: _styled.StyledCode,
  blockquote: _styled.StyledBlockquote,
  p: _styled.StyledParagraph,
  a: _styled.StyledLink,
  hr: _styled.StyledHR,
  ul: _styled.StyledList,
  ol: _styled.StyledOrderedList,
  li: _styled.StyledListItem,
  table: _styled.StyledTable,
  th: _styled.StyledTableHeadindCell,
  tr: _styled.StyledTableRow,
  td: _styled.StyledTableCell,
  pre: _styled.StyledPre
};
exports.defaultRenderer = defaultRenderer;
var inlineRenderer = {
  h1: function h1(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 1
    }, props));
  },
  h2: function h2(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 2
    }, props));
  },
  h3: function h3(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 3
    }, props));
  },
  h4: function h4(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 4
    }, props));
  },
  h5: function h5(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 5
    }, props));
  },
  h6: function h6(props) {
    return _react["default"].createElement(InlineHeading, (0, _extends2["default"])({
      level: 6
    }, props));
  },
  code: _styled.StyledInlineCode,
  blockquote: _styled.StyledInlineBlockquote,
  p: _styled.StyledInlineParagraph,
  a: _styled.StyledLink,
  hr: _styled.StyledHR,
  ul: _styled.StyledList,
  ol: _styled.StyledOrderedList,
  li: _styled.StyledListItem,
  table: _styled.StyledTable,
  th: _styled.StyledTableHeadindCell,
  tr: _styled.StyledTableRow,
  td: _styled.StyledTableCell,
  pre: _styled.StyledInlinePre
};
exports.inlineRenderer = inlineRenderer;