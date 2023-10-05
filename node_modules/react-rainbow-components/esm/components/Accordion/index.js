import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { LEFT_KEY, RIGHT_KEY, DOWN_KEY, UP_KEY } from '../../libs/constants';
import StyledUl from './styled/ul';
import { useChildrenRegisterRef } from '../../libs/hooks';
var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;
var SELECTOR = 'li[data-id="accordion-section-li"]';

var Accordion = function Accordion(props) {
  var _keyHandlerMap;

  var id = props.id,
      children = props.children,
      style = props.style,
      className = props.className,
      activeSectionNames = props.activeSectionNames,
      multiple = props.multiple,
      onToggleSection = props.onToggleSection;
  var containerRef = useRef();

  var _useState = useState(activeSectionNames),
      _useState2 = _slicedToArray(_useState, 2),
      activeNames = _useState2[0],
      setActiveNames = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      currentSection = _useState4[0],
      setCurrentSection = _useState4[1];

  var _useChildrenRegisterR = useChildrenRegisterRef({
    containerRef: containerRef,
    selector: SELECTOR
  }),
      childrenRegistered = _useChildrenRegisterR.childrenRegistered,
      register = _useChildrenRegisterR.register,
      unregister = _useChildrenRegisterR.unregister;

  useEffect(function () {
    if (activeSectionNames !== activeNames) {
      setActiveNames(activeSectionNames);
    }
  }, [activeSectionNames]);

  var handleToggleSection = function handleToggleSection(event, name) {
    if (typeof onToggleSection === 'function') {
      return onToggleSection(event, name);
    }

    return setActiveNames(name);
  };

  var setAsSelectAccordionSection = function setAsSelectAccordionSection(accordionSectionIndex) {
    childrenRegistered[accordionSectionIndex].focusButton();
  };

  var selectAccordionSection = function selectAccordionSection(side) {
    var accordionSectionIndex = childrenRegistered.findIndex(function (section) {
      return section.id === currentSection;
    });

    if (accordionSectionIndex === childrenRegistered.length - 1 && side === RIGHT_SIDE) {
      setAsSelectAccordionSection(0);
    } else if (accordionSectionIndex === 0 && side === LEFT_SIDE) {
      setAsSelectAccordionSection(childrenRegistered.length - 1);
    } else {
      setAsSelectAccordionSection(accordionSectionIndex + side);
    }
  };

  var keyHandlerMap = (_keyHandlerMap = {}, _defineProperty(_keyHandlerMap, RIGHT_KEY, function () {
    return selectAccordionSection(RIGHT_SIDE);
  }), _defineProperty(_keyHandlerMap, LEFT_KEY, function () {
    return selectAccordionSection(LEFT_SIDE);
  }), _defineProperty(_keyHandlerMap, DOWN_KEY, function () {
    return selectAccordionSection(RIGHT_SIDE);
  }), _defineProperty(_keyHandlerMap, UP_KEY, function () {
    return selectAccordionSection(LEFT_SIDE);
  }), _keyHandlerMap);

  var handleKeyPressed = function handleKeyPressed(event) {
    if (keyHandlerMap[event.keyCode]) {
      event.preventDefault();
      return keyHandlerMap[event.keyCode]();
    }

    return null;
  };

  var context = {
    activeNames: activeNames,
    multiple: multiple,
    privateOnToggleSection: handleToggleSection,
    privateOnFocusSection: setCurrentSection,
    privateRegisterAccordionSection: register,
    privateUnregisterAccordionSection: unregister,
    privateOnKeyPressed: handleKeyPressed
  };
  return React.createElement(StyledUl, {
    ref: containerRef,
    id: id,
    className: className,
    style: style
  }, React.createElement(Provider, {
    value: context
  }, children));
};

Accordion.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  multiple: PropTypes.bool,
  onToggleSection: PropTypes.func,
  activeSectionNames: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
};
Accordion.defaultProps = {
  className: undefined,
  style: undefined,
  children: null,
  id: undefined,
  multiple: false,
  onToggleSection: undefined,
  activeSectionNames: undefined
};
export default Accordion;