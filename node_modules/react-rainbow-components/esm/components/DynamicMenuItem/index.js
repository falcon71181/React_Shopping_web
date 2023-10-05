import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["renderIf", "disabled", "rowData"];
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';

var DynamicMenuItem = function DynamicMenuItem(props) {
  var renderIf = props.renderIf,
      disabled = props.disabled,
      row = props.rowData,
      rest = _objectWithoutProperties(props, _excluded);

  var shouldRender = typeof renderIf === 'function' ? renderIf({
    row: row
  }) : true;
  var isDisabled = typeof disabled === 'function' ? disabled({
    row: row
  }) : false;

  if (shouldRender) {
    return React.createElement(MenuItem, _extends({}, rest, {
      disabled: isDisabled
    }));
  }

  return null;
};

DynamicMenuItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'header']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  rowData: PropTypes.object,
  renderIf: PropTypes.func,
  disabled: PropTypes.func
};
DynamicMenuItem.defaultProps = {
  label: null,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  onClick: function onClick() {},
  title: undefined,
  className: undefined,
  style: undefined,
  rowData: undefined,
  renderIf: function renderIf() {
    return true;
  },
  disabled: function disabled() {
    return false;
  }
};
export default DynamicMenuItem;