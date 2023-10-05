import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/button';
import Spinner from '../Spinner';
import SpinnerContainer from './styled/spinnerContainer';
import RightArrow from './icons/rightArrow';
import DownArrow from './icons/downArrow';

function getIcon(isExpanded) {
  if (isExpanded) {
    return React.createElement(DownArrow, null);
  }

  return React.createElement(RightArrow, null);
}

export default function ExpandCollapseButton(props) {
  var isExpanded = props.isExpanded,
      isLoading = props.isLoading,
      onClick = props.onClick;

  if (isLoading) {
    return React.createElement(SpinnerContainer, null, React.createElement(Spinner, {
      variant: "brand",
      type: "arc",
      size: "xx-small"
    }));
  }

  return React.createElement(Button, {
    size: "x-small",
    icon: getIcon(isExpanded),
    onClick: onClick,
    tabIndex: -1
  });
}
ExpandCollapseButton.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};