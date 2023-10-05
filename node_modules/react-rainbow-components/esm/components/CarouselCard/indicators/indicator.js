import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../../AssistiveText';
import StyledIndicatorLi from '../styled/indicatorLi';
import StyledIndicatorButton from '../styled/indicatorButton';

function getAssistiveText(header) {
  if (typeof header === 'string') {
    return "".concat(header, " Tab");
  }

  return undefined;
}

var Indicator = function Indicator(props) {
  var id = props.id,
      containerId = props.containerId,
      header = props.header,
      onSelect = props.onSelect,
      selectedItem = props.selectedItem,
      onCreate = props.onCreate,
      onDestroy = props.onDestroy;
  var indicatorRef = useRef();
  useEffect(function () {
    onCreate({
      id: id,
      ref: indicatorRef.current
    });
    return function () {
      onDestroy(id);
    };
  }, []);
  var assistiveText = getAssistiveText(header);
  var isSelected = selectedItem === id;
  var tabIndex = isSelected ? 0 : -1;
  return React.createElement(StyledIndicatorLi, {
    role: "presentation",
    key: id
  }, React.createElement(StyledIndicatorButton, {
    id: id,
    isSelected: isSelected,
    role: "tab",
    tabIndex: tabIndex,
    "aria-selected": isSelected,
    "aria-controls": containerId,
    title: assistiveText,
    onClick: function onClick() {
      return onSelect(id);
    },
    ref: indicatorRef
  }, React.createElement(AssistiveText, {
    text: assistiveText
  })));
};

Indicator.propTypes = {
  id: PropTypes.string,
  containerId: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onSelect: PropTypes.func,
  onCreate: PropTypes.func,
  onDestroy: PropTypes.func,
  selectedItem: PropTypes.string
};
Indicator.defaultProps = {
  id: undefined,
  containerId: undefined,
  header: undefined,
  onSelect: function onSelect() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  selectedItem: undefined
};
export default Indicator;