import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';
export default function PicklistOption(props) {
  return React.createElement(Option, props);
}
PicklistOption.propTypes = {
  label: PropTypes.node,
  searchableText: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'header']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
PicklistOption.defaultProps = {
  label: undefined,
  searchableText: undefined,
  name: undefined,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  title: undefined,
  className: undefined,
  style: undefined,
  value: undefined
};