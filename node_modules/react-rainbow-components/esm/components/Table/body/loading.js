import React from 'react';
import PropTypes from 'prop-types';
import LoadingCells from './loadingCells';
import StyledRow from './styled/row';
export default function Loading(_ref) {
  var columns = _ref.columns;
  var columnsLength = columns.length;
  return React.createElement(React.Fragment, null, React.createElement(StyledRow, null, React.createElement(LoadingCells, {
    columns: columns,
    value: columnsLength
  })), React.createElement(StyledRow, null, React.createElement(LoadingCells, {
    columns: columns,
    value: columnsLength
  })), React.createElement(StyledRow, null, React.createElement(LoadingCells, {
    columns: columns,
    value: columnsLength - 1
  })), React.createElement(StyledRow, null, React.createElement(LoadingCells, {
    columns: columns,
    value: columnsLength - 3
  })));
}
Loading.propTypes = {
  columns: PropTypes.array
};
Loading.defaultProps = {
  columns: []
};