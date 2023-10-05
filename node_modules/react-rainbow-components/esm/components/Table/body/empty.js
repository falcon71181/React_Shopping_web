import React from 'react';
import PropTypes from 'prop-types';
import StyledEmptyContainer from './styled/emptyContainer';
import StyledEmptyIcon from './styled/emptyIcon';
import StyledEmptyTitle from './styled/emptyTitle';
import StyledEmptyDescription from './styled/emptyDescription';
import StyledTd from './styled/td';
export default function Empty(props) {
  var emptyIcon = props.emptyIcon,
      emptyTitle = props.emptyTitle,
      emptyDescription = props.emptyDescription,
      columnsLength = props.columnsLength;
  return React.createElement("tr", null, React.createElement(StyledTd, {
    colSpan: columnsLength
  }, React.createElement(StyledEmptyContainer, null, React.createElement(StyledEmptyIcon, null, emptyIcon), React.createElement(StyledEmptyTitle, null, emptyTitle), React.createElement(StyledEmptyDescription, null, emptyDescription))));
}
Empty.propTypes = {
  columnsLength: PropTypes.number,
  emptyIcon: PropTypes.node,
  emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Empty.defaultProps = {
  columnsLength: 0,
  emptyIcon: undefined,
  emptyTitle: undefined,
  emptyDescription: undefined
};