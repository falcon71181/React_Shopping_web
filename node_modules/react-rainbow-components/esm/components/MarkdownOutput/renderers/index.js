import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { StyledHeading, StyledInlineHeading, StyledParagraph, StyledInlineParagraph, StyledCode, StyledInlineCode, StyledHR, StyledTable, StyledTableRow, StyledTableHeadindCell, StyledTableCell, StyledList, StyledOrderedList, StyledListItem, StyledBlockquote, StyledInlineBlockquote, StyledLink, StyledPre, StyledInlinePre } from './styled';

var Heading = function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children;
  return React.createElement(StyledHeading, {
    as: "h".concat(level),
    level: level
  }, children);
};

var InlineHeading = function InlineHeading(_ref2) {
  var level = _ref2.level,
      children = _ref2.children;
  return React.createElement(StyledInlineHeading, {
    as: "h".concat(level),
    level: level
  }, children);
};

export var defaultRenderer = {
  h1: function h1(props) {
    return React.createElement(Heading, _extends({
      level: 1
    }, props));
  },
  h2: function h2(props) {
    return React.createElement(Heading, _extends({
      level: 2
    }, props));
  },
  h3: function h3(props) {
    return React.createElement(Heading, _extends({
      level: 3
    }, props));
  },
  h4: function h4(props) {
    return React.createElement(Heading, _extends({
      level: 4
    }, props));
  },
  h5: function h5(props) {
    return React.createElement(Heading, _extends({
      level: 5
    }, props));
  },
  h6: function h6(props) {
    return React.createElement(Heading, _extends({
      level: 6
    }, props));
  },
  code: StyledCode,
  blockquote: StyledBlockquote,
  p: StyledParagraph,
  a: StyledLink,
  hr: StyledHR,
  ul: StyledList,
  ol: StyledOrderedList,
  li: StyledListItem,
  table: StyledTable,
  th: StyledTableHeadindCell,
  tr: StyledTableRow,
  td: StyledTableCell,
  pre: StyledPre
};
export var inlineRenderer = {
  h1: function h1(props) {
    return React.createElement(InlineHeading, _extends({
      level: 1
    }, props));
  },
  h2: function h2(props) {
    return React.createElement(InlineHeading, _extends({
      level: 2
    }, props));
  },
  h3: function h3(props) {
    return React.createElement(InlineHeading, _extends({
      level: 3
    }, props));
  },
  h4: function h4(props) {
    return React.createElement(InlineHeading, _extends({
      level: 4
    }, props));
  },
  h5: function h5(props) {
    return React.createElement(InlineHeading, _extends({
      level: 5
    }, props));
  },
  h6: function h6(props) {
    return React.createElement(InlineHeading, _extends({
      level: 6
    }, props));
  },
  code: StyledInlineCode,
  blockquote: StyledInlineBlockquote,
  p: StyledInlineParagraph,
  a: StyledLink,
  hr: StyledHR,
  ul: StyledList,
  ol: StyledOrderedList,
  li: StyledListItem,
  table: StyledTable,
  th: StyledTableHeadindCell,
  tr: StyledTableRow,
  td: StyledTableCell,
  pre: StyledInlinePre
};