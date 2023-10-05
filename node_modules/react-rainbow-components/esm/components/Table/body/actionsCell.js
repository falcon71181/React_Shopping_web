import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import ButtonMenu from '../../ButtonMenu';
import MoreIcon from './icons/more';
import StyledCellContainer from './styled/cellContainer';
import StyledActionCell from './styled/actionCell';

function MenuItems(_ref) {
  var children = _ref.children,
      rowData = _ref.rowData;
  return React.Children.map(children, function (child) {
    if (isValidElement(child)) {
      return _objectSpread(_objectSpread({}, child), {}, {
        props: _objectSpread(_objectSpread({}, child.props), {}, {
          rowData: rowData,
          onClick: function onClick(event) {
            return child.props.onClick(event, rowData);
          }
        })
      });
    }

    return null;
  }, null);
}

export default function ActionsCell(props) {
  var columnChildren = props.columnChildren,
      rowsLength = props.rowsLength,
      rowIndex = props.rowIndex,
      rowData = props.rowData;

  if (columnChildren) {
    var getMenuAlignment = function getMenuAlignment() {
      var menuItemsLength = columnChildren.length || 1;
      var rowLengthToBottom = rowsLength - (rowIndex + 1);
      var alignMenuAtBottom;

      if (rowsLength / 2 > menuItemsLength) {
        alignMenuAtBottom = rowLengthToBottom <= menuItemsLength;
      } else {
        alignMenuAtBottom = rowIndex > menuItemsLength;
      }

      if (alignMenuAtBottom) {
        return 'bottom-right';
      }

      return 'right';
    };

    return React.createElement(StyledCellContainer, {
      role: "gridcell",
      tabIndex: -1
    }, React.createElement(StyledActionCell, null, React.createElement(ButtonMenu, {
      tabIndex: -1,
      icon: React.createElement(MoreIcon, null),
      menuAlignment: getMenuAlignment(),
      buttonSize: "small"
    }, React.createElement(MenuItems, {
      rowData: rowData
    }, columnChildren))));
  }

  return null;
}
ActionsCell.propTypes = {
  columnChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  rowsLength: PropTypes.number,
  rowIndex: PropTypes.number,
  rowData: PropTypes.object
};
ActionsCell.defaultProps = {
  columnChildren: undefined,
  rowsLength: undefined,
  rowIndex: undefined,
  rowData: {}
};