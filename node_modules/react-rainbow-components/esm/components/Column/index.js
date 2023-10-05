import React from 'react';
import PropTypes from 'prop-types';
export default function Column() {
  return React.createElement("div", null);
}
Column.propTypes = {
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  headerAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  headerComponent: PropTypes.elementType,
  component: PropTypes.func,
  field: PropTypes.string,
  sortable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['text', 'action'])]),
  isEditable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func,
  cellAlignment: PropTypes.oneOf(['left', 'right', 'center'])
};
Column.defaultProps = {
  header: undefined,
  headerAlignment: undefined,
  headerComponent: undefined,
  component: undefined,
  field: undefined,
  sortable: false,
  width: undefined,
  defaultWidth: undefined,
  type: 'text',
  isEditable: false,
  onChange: function onChange() {},
  cellAlignment: undefined
};