import React, { useRef, useContext, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { useUniqueIdentifier } from '../../libs/hooks';
import { ActivityTimelineContext } from '../ActivityTimeline/context';
import CalendarIcon from './calendarIcon';
import StyledLi from './styled/li';
import StyledColumnLeft from './styled/columnLeft';
import StyledIconContainer from './styled/iconContainer';
import StyledContentContainer from './styled/contentContainer';
import StyledHeader from './styled/header';
import StyledLabel from './styled/label';
import StyledDatetime from './styled/datetime';
import StyledDescription from './styled/description';
import StyledBody from './styled/body';
import ExpandCollapseButton from './expandCollapseButton';
import { removeItemFromArray, isInArray } from '../AccordionSection/helpers';
export default function AccordionTimelineMarker(props) {
  var icon = props.icon,
      name = props.name,
      isLoading = props.isLoading,
      label = props.label,
      description = props.description,
      datetime = props.datetime,
      children = props.children,
      className = props.className,
      style = props.style;

  var _useContext = useContext(ActivityTimelineContext),
      activeNames = _useContext.activeNames,
      multiple = _useContext.multiple,
      privateRegisterMarker = _useContext.privateRegisterMarker,
      privateUnregisterMarker = _useContext.privateUnregisterMarker,
      privateOnToggleMarker = _useContext.privateOnToggleMarker;

  var generatedName = useUniqueIdentifier('timeline-marker');
  var currentName = useMemo(function () {
    return name || generatedName;
  }, [generatedName, name]);
  var stepRef = useRef();
  useEffect(function () {
    privateRegisterMarker(stepRef.current, {
      currentName: currentName
    });
    return function () {
      privateUnregisterMarker(stepRef, currentName);
    };
  }, []);
  var resolveActiveNamesWhenMultiple = useCallback(function () {
    if (activeNames === undefined) {
      return [currentName];
    }

    if (isInArray(activeNames, currentName)) {
      return removeItemFromArray(activeNames, currentName);
    }

    return activeNames.concat([currentName]);
  }, [currentName, activeNames]);
  var resolveActiveNames = useCallback(function () {
    if (multiple) {
      return resolveActiveNamesWhenMultiple();
    }

    if (currentName === activeNames) {
      return '';
    }

    return currentName;
  }, [currentName, multiple, activeNames, resolveActiveNamesWhenMultiple]);
  var handleToggleMarker = useCallback(function () {
    return privateOnToggleMarker({
      activeSectionNames: resolveActiveNames(),
      toggledSection: currentName
    });
  }, [currentName, privateOnToggleMarker, resolveActiveNames]);
  var isExpanded = useMemo(function () {
    if (multiple && Array.isArray(activeNames)) {
      return isInArray(activeNames, currentName);
    }

    return activeNames === currentName;
  }, [currentName, activeNames, multiple]);
  var shouldRenderChildren = useMemo(function () {
    return isExpanded && !isLoading;
  }, [isLoading, isExpanded]);
  return React.createElement(StyledLi, {
    "data-id": "timeline-marker-li",
    className: className,
    style: style
  }, React.createElement(StyledColumnLeft, null, React.createElement(StyledIconContainer, null, React.createElement(ExpandCollapseButton, {
    isExpanded: isExpanded,
    isLoading: isLoading,
    onClick: handleToggleMarker
  }), icon)), React.createElement(StyledContentContainer, null, React.createElement("div", null, React.createElement(StyledHeader, null, React.createElement(StyledLabel, null, label), React.createElement(StyledDatetime, null, datetime)), React.createElement(StyledDescription, null, description)), React.createElement(RenderIf, {
    isTrue: shouldRenderChildren
  }, React.createElement(StyledBody, null, children))));
}
AccordionTimelineMarker.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  isLoading: PropTypes.bool
};
AccordionTimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: React.createElement(CalendarIcon, null),
  children: null,
  className: undefined,
  style: undefined,
  name: undefined,
  isLoading: false
};