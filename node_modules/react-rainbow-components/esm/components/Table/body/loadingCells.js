import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';
import StyledTdLoadingContainer from './styled/tdLoadingContainer';
import StyledLoadingCell from './styled/loadingCell';
import StyledElementLoading from './styled/elementLoading';
var widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
  return widths[Math.floor(Math.random() * widths.length)];
}

export default function LoadingCells(_ref) {
  var value = _ref.value,
      columns = _ref.columns;

  if (value > 0) {
    return Array(columns.length).fill().map(function (item, index) {
      var key = "loading-cell-".concat(index);
      var type = columns[index].type;
      var isActionOrSelectable = type === SELECTABLE_CHECKBOX || type === 'action';
      var styles = {
        width: isActionOrSelectable ? '100%' : getRandomWidth()
      };
      return React.createElement(StyledTdLoadingContainer, {
        key: key
      }, React.createElement(StyledLoadingCell, {
        "data-id": "table_body--loading"
      }, React.createElement(RenderIf, {
        isTrue: index < value
      }, React.createElement(StyledElementLoading, {
        style: styles
      }))));
    });
  }

  return null;
}
LoadingCells.propTypes = {
  value: PropTypes.number,
  columns: PropTypes.array
};
LoadingCells.defaultProps = {
  value: 0,
  columns: []
};