import React, { useRef, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { PathContext } from '../Path/context';
import { getActiveStepIndex, isStepSelected } from './helpers';
import { StyledStepItem } from './styled';
import CheckMark from './icons/checkMark';
import Exclamation from './icons/exclamation';
export default function PathStep(props) {
  var name = props.name,
      label = props.label,
      hasError = props.hasError,
      className = props.className,
      style = props.style;

  var _useContext = useContext(PathContext),
      selectedIndex = _useContext.selectedIndex,
      hoveredIndex = _useContext.hoveredIndex,
      privateGetStepIndex = _useContext.privateGetStepIndex,
      privateGetStepZIndex = _useContext.privateGetStepZIndex,
      privateRegisterStep = _useContext.privateRegisterStep,
      privateUnregisterStep = _useContext.privateUnregisterStep,
      privateUpdateStepProps = _useContext.privateUpdateStepProps,
      privateUpdateHoveredStep = _useContext.privateUpdateHoveredStep,
      privateOnClick = _useContext.privateOnClick;

  var stepRef = useRef();
  useEffect(function () {
    privateRegisterStep(stepRef.current, {
      name: name,
      label: label,
      hasError: hasError
    });
    return function () {
      privateUnregisterStep(stepRef, name);
    };
  }, []);
  useEffect(function () {
    privateUpdateStepProps({
      name: name,
      label: label,
      hasError: hasError
    });
  }, [name, label, hasError, privateUpdateStepProps]);
  var index = privateGetStepIndex(name);
  var activeStepIndex = useMemo(function () {
    return getActiveStepIndex({
      hoveredIndex: hoveredIndex,
      selectedIndex: selectedIndex
    });
  }, [hoveredIndex, selectedIndex]);
  var isChecked = activeStepIndex > index;
  var isSelected = useMemo(function () {
    return isStepSelected({
      index: index,
      hoveredIndex: hoveredIndex,
      selectedIndex: selectedIndex
    });
  }, [hoveredIndex, index, selectedIndex]);
  var renderCheckIcon = !hasError && (isChecked || isSelected || activeStepIndex === index);
  return React.createElement(StyledStepItem, {
    ref: stepRef,
    role: "option",
    className: className,
    style: style,
    isSelected: isSelected,
    hasError: hasError,
    isChecked: isChecked,
    zIndex: privateGetStepZIndex(name),
    onClick: function onClick() {
      return privateOnClick(name);
    },
    onMouseEnter: function onMouseEnter() {
      return privateUpdateHoveredStep(name);
    },
    onMouseLeave: function onMouseLeave() {
      return privateUpdateHoveredStep(null);
    }
  }, label, React.createElement(RenderIf, {
    isTrue: renderCheckIcon
  }, React.createElement(CheckMark, null)), React.createElement(RenderIf, {
    isTrue: hasError
  }, React.createElement(Exclamation, null)));
}
PathStep.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  hasError: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};
PathStep.defaultProps = {
  label: undefined,
  hasError: false,
  className: undefined,
  style: undefined
};