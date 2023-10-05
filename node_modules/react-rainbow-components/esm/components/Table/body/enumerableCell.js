import React from 'react';
import StyledCellContainer from './styled/cellContainer';
import StyledCellContent from './styled/cellContent';
import StyledEnumerable from './styled/enumerable';
export default function EnumerableCell() {
  return React.createElement(StyledCellContainer, {
    role: "gridcell",
    tabIndex: -1,
    hideBorderRight: true
  }, React.createElement(StyledCellContent, null, React.createElement(StyledEnumerable, null)));
}