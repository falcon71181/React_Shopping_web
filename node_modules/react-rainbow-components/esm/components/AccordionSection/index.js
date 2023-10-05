import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { AccordionContext } from '../Accordion/context';
import RightArrow from './rightArrow';
import { getIsExpanded, isInArray } from './helpers';
import StyledLi from './styled/li';
import StyledSummary from './styled/summary';
import StyledHeading from './styled/heading';
import StyledIcon from './styled/icon';
import StyledContent from './styled/content';
import AssistiveText from '../AssistiveText';
import StyledSpan from './styled/span';
import useUniqueIdentifier from '../../libs/hooks/useUniqueIdentifier';
var contextDefault = {
  privateRegisterAccordionSection: function privateRegisterAccordionSection() {},
  privateUnregisterAccordionSection: function privateUnregisterAccordionSection() {}
};

var AccordionSection = function AccordionSection(props) {
  var _useContext;

  var style = props.style,
      disabled = props.disabled,
      children = props.children,
      label = props.label,
      icon = props.icon,
      assistiveText = props.assistiveText,
      className = props.className,
      variant = props.variant,
      name = props.name;

  var _ref = (_useContext = useContext(AccordionContext)) !== null && _useContext !== void 0 ? _useContext : contextDefault,
      activeNames = _ref.activeNames,
      multiple = _ref.multiple,
      privateOnToggleSection = _ref.privateOnToggleSection,
      privateOnFocusSection = _ref.privateOnFocusSection,
      privateRegisterAccordionSection = _ref.privateRegisterAccordionSection,
      privateUnregisterAccordionSection = _ref.privateUnregisterAccordionSection,
      privateOnKeyPressed = _ref.privateOnKeyPressed;

  var containerRef = useRef();
  var buttonRef = useRef();
  var uniqueName = useUniqueIdentifier('accordion-section');
  var accordionDetailsId = useUniqueIdentifier('accordion-section-details');
  var currentName = name || uniqueName;
  useEffect(function () {
    if (!disabled) {
      privateRegisterAccordionSection({
        id: currentName,
        ref: containerRef.current,
        focusButton: function focusButton() {
          return buttonRef.current.focus();
        }
      });
    }

    return function () {
      if (!disabled) {
        privateUnregisterAccordionSection(currentName);
      }
    };
  }, []);
  var isExpanded = getIsExpanded({
    multiple: multiple,
    activeNames: activeNames,
    currentName: currentName
  });

  var resolveActiveNamesWhenMultiple = function resolveActiveNamesWhenMultiple() {
    if (activeNames === undefined) {
      return [currentName];
    }

    if (isInArray(activeNames, currentName)) {
      return activeNames.filter(function (element) {
        return element !== currentName;
      });
    }

    return [].concat(_toConsumableArray(activeNames), [currentName]);
  };

  var resolveActiveNames = function resolveActiveNames() {
    if (multiple) {
      return resolveActiveNamesWhenMultiple();
    }

    if (currentName === activeNames) {
      return '';
    }

    return currentName;
  };

  var handleToggleSection = function handleToggleSection(event) {
    if (!disabled) {
      privateOnToggleSection(event, resolveActiveNames());
    }
  };

  var handleFocusSection = function handleFocusSection() {
    if (!disabled) {
      privateOnFocusSection(currentName);
    }
  };

  var handleKeyPressed = function handleKeyPressed(event) {
    if (!disabled) {
      privateOnKeyPressed(event);
    }
  };

  return React.createElement(StyledLi, {
    "data-id": "accordion-section-li",
    className: className,
    style: style,
    disabled: disabled,
    variant: variant,
    isExpanded: isExpanded,
    ref: containerRef
  }, React.createElement(StyledSummary, {
    "data-id": "accordion-section-summary",
    isExpanded: isExpanded,
    variant: variant,
    disabled: disabled,
    onClick: handleToggleSection,
    onFocus: handleFocusSection,
    onKeyDown: handleKeyPressed,
    "aria-controls": accordionDetailsId,
    "aria-expanded": isExpanded,
    type: "button",
    ref: buttonRef
  }, React.createElement(RightArrow, {
    isExpanded: isExpanded,
    disabled: disabled
  }), React.createElement(AssistiveText, {
    text: assistiveText
  }), React.createElement(StyledHeading, {
    disabled: disabled
  }, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIcon, null, icon)), React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(StyledSpan, {
    "data-id": "accordion-section-label"
  }, label)))), React.createElement(StyledContent, {
    "data-id": "accordion-section-content",
    "aria-hidden": !isExpanded,
    isCollapsed: !isExpanded,
    id: accordionDetailsId
  }, children));
};

AccordionSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  assistiveText: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'error'])
};
AccordionSection.defaultProps = {
  className: undefined,
  style: undefined,
  assistiveText: undefined,
  disabled: false,
  children: null,
  label: undefined,
  icon: null,
  name: undefined,
  variant: 'default'
};
export default AccordionSection;