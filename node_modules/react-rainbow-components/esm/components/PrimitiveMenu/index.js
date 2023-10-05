import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "className", "style", "children", "isLoading", "menuAlignment", "menuSize", "title", "assistiveText", "trigger", "borderRadius"];
import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrolling } from '@rainbow-modules/hooks';
import { useDisclosure, useOutsideClick, useWindowResize, useUniqueIdentifier } from '../../libs/hooks';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import InternalOverlay from '../InternalOverlay';
import MenuContent from './menuContent';
import { StyledContainer, StyledDropdown } from './styled';
import { resolvePosition } from './utils';
var PrimitiveMenu = React.forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      style = props.style,
      children = props.children,
      isLoading = props.isLoading,
      menuAlignment = props.menuAlignment,
      menuSize = props.menuSize,
      title = props.title,
      assistiveText = props.assistiveText,
      Trigger = props.trigger,
      borderRadius = props.borderRadius,
      rest = _objectWithoutProperties(props, _excluded);

  var listboxId = useUniqueIdentifier('listbox');
  var ariaLabel = title || assistiveText;
  var triggerRef = useRef();
  var dropdownRef = useRef();

  var _useDisclosure = useDisclosure(false),
      isOpen = _useDisclosure.isOpen,
      closeMenu = _useDisclosure.close,
      toggleMenu = _useDisclosure.toggle;

  useOutsideClick(dropdownRef, function (event) {
    if (triggerRef.current.htmlElementRef.current.contains(event.target)) {
      return null;
    }

    return closeMenu();
  }, isOpen);
  useWindowResize(function () {
    return closeMenu();
  }, isOpen);
  useWindowScrolling(closeMenu, isOpen);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        triggerRef.current.focus();
      },
      click: function click() {
        triggerRef.current.click();
      },
      blur: function blur() {
        triggerRef.current.blur();
      }
    };
  });
  var positionResolver = useCallback(function (opts) {
    return resolvePosition(opts, menuAlignment);
  }, [menuAlignment]);
  var handleKeyDown = useCallback(function (event) {
    if (isOpen) {
      var keyCode = event.keyCode;
      if (keyCode !== TAB_KEY) event.preventDefault();

      if (keyCode === TAB_KEY || keyCode === ESCAPE_KEY) {
        closeMenu();
        triggerRef.current.focus();
      }
    }
  }, [closeMenu, isOpen]);
  return React.createElement(StyledContainer, {
    id: id,
    role: "presentation",
    className: className,
    style: style,
    onKeyDown: handleKeyDown
  }, React.createElement(Trigger, _extends({}, rest, {
    isOpen: isOpen,
    title: title,
    ariaControls: listboxId,
    ariaExpanded: isOpen,
    ariaHaspopup: true,
    assistiveText: assistiveText,
    onClick: toggleMenu,
    ref: triggerRef,
    borderRadius: borderRadius
  })), React.createElement(InternalOverlay, {
    isVisible: isOpen,
    positionResolver: positionResolver,
    triggerElementRef: function triggerElementRef() {
      return triggerRef.current.htmlElementRef;
    }
  }, React.createElement(StyledDropdown, {
    id: listboxId,
    "data-id": "primitive-menu_dropdown",
    ref: dropdownRef,
    menuSize: menuSize,
    menuAlignment: menuAlignment,
    isLoading: isLoading,
    borderRadius: borderRadius
  }, React.createElement(MenuContent, {
    ariaLabel: ariaLabel,
    onRequestClose: closeMenu,
    isLoading: isLoading
  }, children))));
});
PrimitiveMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: PropTypes.oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PrimitiveMenu.defaultProps = {
  children: null,
  menuSize: 'xx-small',
  menuAlignment: 'left',
  isLoading: false,
  title: undefined,
  assistiveText: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  borderRadius: 'rounded'
};
export default PrimitiveMenu;