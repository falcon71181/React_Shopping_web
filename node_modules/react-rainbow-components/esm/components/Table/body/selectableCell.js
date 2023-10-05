import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import { LEFT_KEY, RIGHT_KEY } from '../../../libs/constants';
import StyledCellContainer from './styled/cellContainer';
import StyledCheckboxContainer from './styled/checkboxContainer';
export default function SelectableCell(props) {
  var isSelected = props.isSelected,
      isDisabled = props.isDisabled,
      tableId = props.tableId,
      onSelectRow = props.onSelectRow,
      onDeselectRow = props.onDeselectRow,
      inputType = props.inputType;
  var name = "".concat(tableId, "-options");
  var isRadio = inputType === 'radio';

  var handleMouseDown = function handleMouseDown(event) {
    if (event.shiftKey) {
      event.preventDefault();
    }
  };

  var handleClick = function handleClick(event) {
    var isMultipleSelection = !isRadio && event.shiftKey;

    if (isRadio && isSelected) {
      return;
    }

    if (isSelected) {
      onDeselectRow(event, isMultipleSelection);
    } else {
      onSelectRow(event, isMultipleSelection);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    var keyCode = event.keyCode;

    if (isRadio && (keyCode === LEFT_KEY || keyCode === RIGHT_KEY)) {
      event.preventDefault();
    }
  };

  return React.createElement(StyledCellContainer, {
    role: "gridcell",
    tabIndex: -1,
    hideBorderRight: true
  }, React.createElement(StyledCheckboxContainer, {
    role: "presentation",
    onMouseDown: handleMouseDown
  }, React.createElement(Input, {
    className: "rainbow-table_cell-checkbox",
    name: name,
    label: "select row",
    hideLabel: true,
    type: inputType,
    tabIndex: "-1",
    checked: isSelected,
    disabled: isDisabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  })));
}
SelectableCell.propTypes = {
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tableId: PropTypes.string.isRequired,
  onSelectRow: PropTypes.func,
  onDeselectRow: PropTypes.func,
  inputType: PropTypes.string
};
SelectableCell.defaultProps = {
  isSelected: false,
  isDisabled: false,
  onSelectRow: function onSelectRow() {},
  onDeselectRow: function onDeselectRow() {},
  inputType: 'checkbox'
};