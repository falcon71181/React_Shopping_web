import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveCheckbox from '../../PrimitiveCheckbox';
import StyledWrapper from './styled/wrapper';
import StyledCheckboxWrapper from './styled/checkboxWrapper';
var bulkStateMap = {
  all: true,
  some: 'indeterminate',
  none: false
};
export default function SelectableHeader(props) {
  var onSelectAllRows = props.onSelectAllRows,
      onDeselectAllRows = props.onDeselectAllRows,
      tableId = props.tableId,
      maxRowSelection = props.maxRowSelection,
      bulkSelection = props.bulkSelection,
      style = props.style;
  var name = "".concat(tableId, "-options");
  var isDisabled = maxRowSelection === 0;
  var isRadio = maxRowSelection === 1;
  var checked = bulkStateMap[bulkSelection];

  var handleClick = function handleClick(event) {
    if (bulkSelection === 'none') {
      return onSelectAllRows(event);
    }

    return onDeselectAllRows(event);
  };

  if (isRadio) {
    return React.createElement(StyledWrapper, {
      as: "th",
      style: style,
      scope: "col",
      tabIndex: -1
    });
  }

  return React.createElement(StyledWrapper, {
    as: "th",
    style: style,
    scope: "col",
    tabIndex: -1
  }, React.createElement(StyledCheckboxWrapper, {
    style: style
  }, React.createElement(PrimitiveCheckbox, {
    name: name,
    label: "select all rows",
    hideLabel: true,
    type: "checkbox",
    tabIndex: "-1",
    checked: checked,
    disabled: isDisabled,
    onClick: handleClick
  })));
}
SelectableHeader.propTypes = {
  onSelectAllRows: PropTypes.func,
  onDeselectAllRows: PropTypes.func,
  tableId: PropTypes.string.isRequired,
  maxRowSelection: PropTypes.number,
  bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
  style: PropTypes.object
};
SelectableHeader.defaultProps = {
  onSelectAllRows: function onSelectAllRows() {},
  onDeselectAllRows: function onDeselectAllRows() {},
  maxRowSelection: undefined,
  bulkSelection: 'none',
  style: undefined
};