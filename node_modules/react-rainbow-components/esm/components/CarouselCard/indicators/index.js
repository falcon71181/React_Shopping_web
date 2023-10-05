import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEFT_KEY, RIGHT_KEY } from '../../../libs/constants';
import { getItemIndex } from '../helpers';
import Indicator from './indicator';
import StyledIndicatorUl from '../styled/indicatorsUl';
import { useChildrenRegister } from '../../../libs/hooks';
var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;
var SELECTOR = '[role="tab"]';

var Indicators = function Indicators(props) {
  var _keyHandlerMap;

  var carouselChildren = props.carouselChildren,
      onSelect = props.onSelect,
      selectedItem = props.selectedItem;
  var containerRef = useRef();

  var _useChildrenRegister = useChildrenRegister({
    containerRef: containerRef,
    selector: SELECTOR
  }),
      indicatorsRefs = _useChildrenRegister.childrenRegistered,
      register = _useChildrenRegister.register,
      unregister = _useChildrenRegister.unregister;

  var setAsSelectedIndicator = function setAsSelectedIndicator(tabIndex) {
    indicatorsRefs[tabIndex].ref.click();
    indicatorsRefs[tabIndex].ref.focus();
  };

  var selectIndicator = function selectIndicator(side) {
    var indicatorIndex = getItemIndex(indicatorsRefs, selectedItem);

    if (indicatorIndex === indicatorsRefs.length - 1 && side === RIGHT_SIDE) {
      setAsSelectedIndicator(0);
    } else if (indicatorIndex === 0 && side === LEFT_SIDE) {
      setAsSelectedIndicator(indicatorsRefs.length - 1);
    } else {
      setAsSelectedIndicator(indicatorIndex + side);
    }
  };

  var keyHandlerMap = (_keyHandlerMap = {}, _defineProperty(_keyHandlerMap, RIGHT_KEY, function () {
    return selectIndicator(RIGHT_SIDE);
  }), _defineProperty(_keyHandlerMap, LEFT_KEY, function () {
    return selectIndicator(LEFT_SIDE);
  }), _keyHandlerMap);

  var handleKeyPressed = function handleKeyPressed(event) {
    if (keyHandlerMap[event.keyCode]) {
      return keyHandlerMap[event.keyCode]();
    }

    return null;
  };

  return React.createElement(StyledIndicatorUl, {
    role: "tablist",
    onKeyDown: handleKeyPressed,
    ref: containerRef
  }, carouselChildren.map(function (_ref) {
    var id = _ref.id,
        containerId = _ref.containerId,
        header = _ref.header;
    return React.createElement(Indicator, {
      id: id,
      containerId: containerId,
      header: header,
      onSelect: onSelect,
      selectedItem: selectedItem,
      onCreate: register,
      onDestroy: unregister,
      key: id
    });
  }));
};

Indicators.propTypes = {
  carouselChildren: PropTypes.array,
  onSelect: PropTypes.func,
  selectedItem: PropTypes.string
};
Indicators.defaultProps = {
  carouselChildren: [],
  onSelect: function onSelect() {},
  selectedItem: undefined
};
export default Indicators;