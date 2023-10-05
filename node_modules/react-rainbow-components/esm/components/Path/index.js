import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useCallback, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import isChildRegistered from '../InternalDropdown/helpers/isChildRegistered';
import insertChildOrderly from '../InternalDropdown/helpers/insertChildOrderly';
import { getChildStepsNodes } from './helpers';
import { StyledContainer, StyledStepsList } from './styled';
export default function Path(props) {
  var currentStepName = props.currentStepName,
      onClick = props.onClick,
      children = props.children,
      id = props.id,
      className = props.className,
      style = props.style;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      hoveredStepName = _useState2[0],
      setHoveredStepName = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      stepsCount = _useState4[0],
      setStepsCount = _useState4[1];

  var registeredSteps = useRef([]);
  var containerRef = useRef();
  var privateRegisterStep = useCallback(function (stepRef, stepProps) {
    if (isChildRegistered(stepProps.name, registeredSteps.current)) return;

    var _getChildStepsNodes = getChildStepsNodes(containerRef.current),
        _getChildStepsNodes2 = _toArray(_getChildStepsNodes),
        nodes = _getChildStepsNodes2.slice(0);

    var newStepsList = insertChildOrderly(registeredSteps.current, _objectSpread({
      ref: stepRef
    }, stepProps), nodes);
    registeredSteps.current = newStepsList;
    setStepsCount(registeredSteps.current.length);
  }, []);
  var privateUnregisterStep = useCallback(function (stepRef, stepName) {
    if (!isChildRegistered(stepName, registeredSteps.current)) return;
    registeredSteps.current = registeredSteps.current.filter(function (step) {
      return step.name !== stepName;
    });
    setStepsCount(registeredSteps.current.length);
  }, []);
  var getStepIndex = useCallback(function (name) {
    return registeredSteps.current.findIndex(function (step) {
      return step.name === name;
    });
  }, []);
  var privateGetStepZIndex = useCallback(function (name) {
    return stepsCount - getStepIndex(name);
  }, [getStepIndex, stepsCount]);
  var privateUpdateStepProps = useCallback(function (stepProps) {
    if (!isChildRegistered(stepProps.name, registeredSteps.current)) return;
    var index = registeredSteps.current.findIndex(function (registeredStep) {
      return registeredStep.name === stepProps.name;
    });
    var updatedStep = registeredSteps.current[index];
    registeredSteps.current[index] = _objectSpread(_objectSpread({}, updatedStep), stepProps);
  }, []);
  var context = useMemo(function () {
    var selectedIndex = registeredSteps.current.findIndex(function (step) {
      return step.name === currentStepName;
    });
    var hoveredIndex = registeredSteps.current.findIndex(function (step) {
      return step.name === hoveredStepName;
    });
    return {
      selectedIndex: selectedIndex,
      hoveredIndex: hoveredIndex,
      privateGetStepIndex: getStepIndex,
      privateGetStepZIndex: privateGetStepZIndex,
      privateRegisterStep: privateRegisterStep,
      privateUnregisterStep: privateUnregisterStep,
      privateUpdateStepProps: privateUpdateStepProps,
      privateOnClick: onClick,
      privateUpdateHoveredStep: setHoveredStepName
    };
  }, [currentStepName, getStepIndex, hoveredStepName, onClick, privateGetStepZIndex, privateRegisterStep, privateUnregisterStep, privateUpdateStepProps]);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style,
    ref: containerRef
  }, React.createElement(StyledStepsList, null, React.createElement(Provider, {
    value: context
  }, children)));
}
Path.propTypes = {
  currentStepName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
Path.defaultProps = {
  currentStepName: undefined,
  onClick: function onClick() {},
  children: null,
  id: undefined,
  className: undefined,
  style: undefined
};