import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import isChildRegistered from '../InternalDropdown/helpers/isChildRegistered';
import insertChildOrderly from '../InternalDropdown/helpers/insertChildOrderly';
import { getChildTimelineMarkersNodes } from './helpers';
import { Provider } from './context';
import StyledUl from './styled/ul';
export default function AccordionTimeline(props) {
  var id = props.id,
      children = props.children,
      className = props.className,
      style = props.style,
      multiple = props.multiple,
      activeSectionNames = props.activeSectionNames,
      onToggleSection = props.onToggleSection;
  var registeredTimelineMarkers = useRef([]);

  var _useState = useState(activeSectionNames),
      _useState2 = _slicedToArray(_useState, 2),
      activeNames = _useState2[0],
      setActiveNames = _useState2[1];

  var containerRef = useRef();
  useEffect(function () {
    if (activeSectionNames && activeSectionNames !== activeNames && typeof onToggleSection === 'function') {
      setActiveNames(activeSectionNames);
    }
  }, [activeSectionNames, onToggleSection]);
  var privateRegisterMarker = useCallback(function (stepRef, stepProps) {
    if (isChildRegistered(stepProps.name, registeredTimelineMarkers.current)) return;

    var _getChildTimelineMark = getChildTimelineMarkersNodes(containerRef.current),
        _getChildTimelineMark2 = _toArray(_getChildTimelineMark),
        nodes = _getChildTimelineMark2.slice(0);

    var newStepsList = insertChildOrderly(registeredTimelineMarkers.current, _objectSpread({
      ref: stepRef
    }, stepProps), nodes);
    registeredTimelineMarkers.current = newStepsList;
  }, []);
  var privateUnregisterMarker = useCallback(function (stepRef, stepName) {
    if (!isChildRegistered(stepName, registeredTimelineMarkers.current)) return;
    registeredTimelineMarkers.current = registeredTimelineMarkers.current.filter(function (step) {
      return step.name !== stepName;
    });
  }, []);
  var privateOnToggleMarker = useCallback(function (_ref) {
    var names = _ref.activeSectionNames,
        toggledSection = _ref.toggledSection;

    if (typeof onToggleSection === 'function') {
      onToggleSection({
        activeSectionNames: names,
        toggledSection: toggledSection
      });
    }

    setActiveNames(names);
  }, [onToggleSection]);
  var context = useMemo(function () {
    return {
      activeNames: activeNames,
      multiple: multiple,
      privateRegisterMarker: privateRegisterMarker,
      privateUnregisterMarker: privateUnregisterMarker,
      privateOnToggleMarker: privateOnToggleMarker
    };
  }, [activeNames, multiple, privateRegisterMarker, privateUnregisterMarker, privateOnToggleMarker]);
  return React.createElement(StyledUl, {
    id: id,
    className: className,
    style: style,
    ref: containerRef,
    variant: "accordion"
  }, React.createElement(Provider, {
    value: context
  }, children));
}
AccordionTimeline.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object,
  multiple: PropTypes.bool,
  activeSectionNames: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  onToggleSection: PropTypes.func
};
AccordionTimeline.defaultProps = {
  id: undefined,
  children: null,
  className: undefined,
  style: undefined,
  multiple: false,
  onToggleSection: undefined,
  activeSectionNames: undefined
};