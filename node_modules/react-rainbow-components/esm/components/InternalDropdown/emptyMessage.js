import React from 'react';
import PropTypes from 'prop-types';
import { MessageContainer, MessageDescription, MessageHighLight, StyledSearchIcon } from './styled';
import RenderIf from '../RenderIf';
export default function EmptyMessage(_ref) {
  var searchValue = _ref.searchValue,
      hasTimeout = _ref.hasTimeout;
  var hasSearch = searchValue && !hasTimeout;
  var message = hasSearch ? 'Our robots did not find any match for:' : 'Type something to search';
  return React.createElement(MessageContainer, {
    "data-id": "internal-dropdown-empty-message"
  }, React.createElement(StyledSearchIcon, null), React.createElement(MessageDescription, null, message), React.createElement(RenderIf, {
    isTrue: hasSearch
  }, React.createElement(MessageHighLight, null, " \u201C", searchValue, "\u201D")));
}
EmptyMessage.propTypes = {
  searchValue: PropTypes.string,
  hasTimeout: PropTypes.bool
};
EmptyMessage.defaultProps = {
  searchValue: undefined,
  hasTimeout: false
};