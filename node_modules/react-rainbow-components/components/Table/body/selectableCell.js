"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectableCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("../../Input"));

var _constants = require("../../../libs/constants");

var _cellContainer = _interopRequireDefault(require("./styled/cellContainer"));

var _checkboxContainer = _interopRequireDefault(require("./styled/checkboxContainer"));

function SelectableCell(props) {
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

    if (isRadio && (keyCode === _constants.LEFT_KEY || keyCode === _constants.RIGHT_KEY)) {
      event.preventDefault();
    }
  };

  return _react["default"].createElement(_cellContainer["default"], {
    role: "gridcell",
    tabIndex: -1,
    hideBorderRight: true
  }, _react["default"].createElement(_checkboxContainer["default"], {
    role: "presentation",
    onMouseDown: handleMouseDown
  }, _react["default"].createElement(_Input["default"], {
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
  isSelected: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  tableId: _propTypes["default"].string.isRequired,
  onSelectRow: _propTypes["default"].func,
  onDeselectRow: _propTypes["default"].func,
  inputType: _propTypes["default"].string
};
SelectableCell.defaultProps = {
  isSelected: false,
  isDisabled: false,
  onSelectRow: function onSelectRow() {},
  onDeselectRow: function onDeselectRow() {},
  inputType: 'checkbox'
};