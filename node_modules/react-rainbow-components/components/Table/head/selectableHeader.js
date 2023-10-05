"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectableHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PrimitiveCheckbox = _interopRequireDefault(require("../../PrimitiveCheckbox"));

var _wrapper = _interopRequireDefault(require("./styled/wrapper"));

var _checkboxWrapper = _interopRequireDefault(require("./styled/checkboxWrapper"));

var bulkStateMap = {
  all: true,
  some: 'indeterminate',
  none: false
};

function SelectableHeader(props) {
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
    return _react["default"].createElement(_wrapper["default"], {
      as: "th",
      style: style,
      scope: "col",
      tabIndex: -1
    });
  }

  return _react["default"].createElement(_wrapper["default"], {
    as: "th",
    style: style,
    scope: "col",
    tabIndex: -1
  }, _react["default"].createElement(_checkboxWrapper["default"], {
    style: style
  }, _react["default"].createElement(_PrimitiveCheckbox["default"], {
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
  onSelectAllRows: _propTypes["default"].func,
  onDeselectAllRows: _propTypes["default"].func,
  tableId: _propTypes["default"].string.isRequired,
  maxRowSelection: _propTypes["default"].number,
  bulkSelection: _propTypes["default"].oneOf(['none', 'some', 'all']),
  style: _propTypes["default"].object
};
SelectableHeader.defaultProps = {
  onSelectAllRows: function onSelectAllRows() {},
  onDeselectAllRows: function onDeselectAllRows() {},
  maxRowSelection: undefined,
  bulkSelection: 'none',
  style: undefined
};