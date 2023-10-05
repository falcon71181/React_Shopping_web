import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["ref"];

var _preventDefaultKeys;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useRef, useEffect, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import Content from './content';
import isChildRegistered from './helpers/isChildRegistered';
import getChildMenuItemNodes from './helpers/getChildMenuItemNodes';
import insertChildOrderly from './helpers/insertChildOrderly';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import isOptionVisible from './helpers/isOptionVisible';
import scrollTo from './helpers/scrollTo';
import searchFilter from './helpers/searchFilter';
import getValueNames from './helpers/getValueNames';
import isEmptyObject from './helpers/isEmptyObject';
import EmptyMessage from './emptyMessage';
import { Dropdown, Ul, Arrow, InputSearch, UlContainer, SearchContainer, Icon } from './styled';
import PlaceholderOption from './placeholderOption';
import isChecked from './helpers/isChecked';
import getAllValues from './helpers/getAllValues';
var sizeMap = {
  medium: 227
};
var preventDefaultKeys = (_preventDefaultKeys = {}, _defineProperty(_preventDefaultKeys, UP_KEY, true), _defineProperty(_preventDefaultKeys, DOWN_KEY, true), _preventDefaultKeys);
var menuContainerStyles = {
  maxHeight: sizeMap.medium
};
var InternalDropdown = forwardRef(function (props, reference) {
  var _keyHandlerMap;

  var isLoading = props.isLoading,
      children = props.children,
      value = props.value,
      onChange = props.onChange,
      enableSearch = props.enableSearch,
      id = props.id,
      className = props.className,
      style = props.style,
      multiple = props.multiple,
      showCheckbox = props.showCheckbox,
      placeholder = props.placeholder,
      onSearch = props.onSearch,
      debounce = props.debounce,
      EmptyComponent = props.emptyComponent,
      borderRadius = props.borderRadius;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showScrollUpArrow = _useState2[0],
      setShowScrollUpArrow = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showScrollDownArrow = _useState4[0],
      setShowScrollDownArrow = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      activeOptionName = _useState6[0],
      setActiveOptionName = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      activeOptionIndex = _useState8[0],
      setActiveOptionIndex = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      activeChildrenMap = _useState10[0],
      setActiveChildrenMap = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      searchValue = _useState12[0],
      setSearchValue = _useState12[1];

  var activeChildren = useRef([]);
  var allActiveChildren = useRef();
  var firstChild = useRef();
  var menuRef = useRef();
  var containerRef = useRef();
  var scrollingTimer = useRef();
  var searchRef = useRef();
  var searchTimeout = useRef();
  var showEmptyMessage = enableSearch && onSearch ? !isLoading && React.Children.count(children) === 0 : !isLoading && isEmptyObject(activeChildrenMap);
  useImperativeHandle(reference, function () {
    return {
      focus: function focus() {
        if (enableSearch) {
          return searchRef.current.focus();
        }

        return containerRef.current.focus();
      },
      contains: function contains(element) {
        return containerRef.current.contains(element);
      }
    };
  });
  var isComponentMounted = useRef(true);
  useEffect(function () {
    return function () {
      isComponentMounted.current = false;
    };
  }, []);

  var updateScrollingArrows = function updateScrollingArrows() {
    var menu = menuRef.current;
    setShowScrollUpArrow(menu.scrollTop > 0);
    setShowScrollDownArrow(!isScrollPositionAtMenuBottom(menu));
  };

  var resetActiveChild = function resetActiveChild() {
    setActiveOptionIndex(0);
    var firstActiveChild = activeChildren.current[0];

    if (firstActiveChild) {
      setActiveOptionName(firstActiveChild.name);
    }
  };

  var scrollBy = function scrollBy(offset) {
    menuRef.current.scrollBy(0, offset);
  };

  useEffect(function () {
    scrollTo(menuRef, 0);
    updateScrollingArrows();
  }, []);
  var registerChild = useCallback(function (childRef, childProps) {
    if (!isComponentMounted.current) return;
    if (isChildRegistered(childProps.name, activeChildren.current)) return;

    var _getChildMenuItemNode = getChildMenuItemNodes(containerRef.current),
        _getChildMenuItemNode2 = _toArray(_getChildMenuItemNode),
        nodes = _getChildMenuItemNode2.slice(0);

    var newChildren = insertChildOrderly(activeChildren.current, _objectSpread({
      ref: childRef
    }, childProps), nodes);
    activeChildren.current = newChildren;

    if (onSearch) {
      setActiveOptionIndex(0);
      setActiveOptionName(newChildren[0].name);
      firstChild.current = newChildren[0].name;
    } else if (!firstChild.current) {
      firstChild.current = childProps;
      setActiveOptionName(childProps.name);
    }
  }, []);
  var unregisterChild = useCallback(function (childRef, name) {
    if (!isComponentMounted.current) return;
    if (!isChildRegistered(name, activeChildren.current)) return;
    var newChildren = activeChildren.current.filter(function (child) {
      return child.name !== name;
    });
    activeChildren.current = newChildren;

    if (activeChildren.current.length === 0) {
      firstChild.current = undefined;
    }

    if (onSearch && firstChild.current === name) {
      resetActiveChild();
    }
  }, []);
  var hoverChild = useCallback(function (event, name) {
    setActiveOptionName(name);
    setActiveOptionIndex(activeChildren.current.findIndex(function (child) {
      return child.name === name;
    }));
  }, []);

  var stopArrowScoll = function stopArrowScoll() {
    if (scrollingTimer.current) clearInterval(scrollingTimer.current);
  };

  var handleScrollUpArrowHover = function handleScrollUpArrowHover() {
    stopArrowScoll();
    var menu = menuRef.current;
    scrollingTimer.current = setInterval(function () {
      if (menu.scrollTop > 0) {
        menu.scrollBy(0, -1);
      } else {
        stopArrowScoll();
      }
    }, 5);
  };

  var handleScrollDownArrowHover = function handleScrollDownArrowHover() {
    stopArrowScoll();
    var menu = menuRef.current;
    scrollingTimer.current = setInterval(function () {
      if (!isScrollPositionAtMenuBottom(menu)) {
        menu.scrollBy(0, 1);
      } else {
        stopArrowScoll();
      }
    }, 5);
  };

  var scrollToOption = function scrollToOption(nextFocusedIndex) {
    var currentFocusedOptionRef = activeChildren.current[activeOptionIndex].ref;
    var nextFocusedOptionRef = activeChildren.current[nextFocusedIndex].ref;

    if (!isOptionVisible(nextFocusedOptionRef, menuRef.current)) {
      var amount = nextFocusedOptionRef.offsetTop - currentFocusedOptionRef.offsetTop;
      scrollBy(amount);
    }
  };

  var resetTimeout = function resetTimeout() {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
      searchTimeout.current = undefined;
    }
  };

  var fireSearch = function fireSearch(query) {
    resetTimeout();

    if (debounce) {
      searchTimeout.current = setTimeout(function () {
        resetTimeout();
        onSearch(query);
      }, 500);
    } else {
      onSearch(query);
    }

    setSearchValue(query);
  };

  var handleChange = useCallback(function (option) {
    var icon = option.icon,
        name = option.name,
        label = option.label,
        optionValue = option.value,
        only = option.only;

    if (only) {
      return onChange([{
        label: label,
        name: name,
        icon: icon,
        value: optionValue
      }]);
    }

    if (multiple) {
      if (Array.isArray(value)) {
        if (value.some(function (item) {
          return item.name === name;
        })) {
          return onChange(value.filter(function (item) {
            return item.name !== name;
          }));
        }

        return onChange(value.concat([option]));
      }

      if (value) {
        return onChange([value, option]);
      }

      return onChange([option]);
    }

    return onChange({
      label: label,
      name: name,
      icon: icon,
      value: optionValue
    });
  }, [multiple, value, onChange]);

  var handleKeyUpPressed = function handleKeyUpPressed() {
    var nextActiveIndex = (activeChildren.current.length + activeOptionIndex - 1) % activeChildren.current.length;

    if (nextActiveIndex < activeOptionIndex) {
      if (nextActiveIndex === 0) {
        scrollTo(menuRef, 0);
      } else {
        scrollToOption(nextActiveIndex);
      }

      setActiveOptionIndex(nextActiveIndex);
      setActiveOptionName(activeChildren.current[nextActiveIndex].name);
    }
  };

  var handleKeyDownPressed = function handleKeyDownPressed() {
    var nextActiveIndex = (activeOptionIndex + 1) % activeChildren.current.length;

    if (nextActiveIndex > 0) {
      scrollToOption(nextActiveIndex);
      setActiveOptionIndex(nextActiveIndex);
      setActiveOptionName(activeChildren.current[nextActiveIndex].name);
    }
  };

  var handleKeyEnterPressed = function handleKeyEnterPressed() {
    var _activeChildren$curre = activeChildren.current[activeOptionIndex],
        ref = _activeChildren$curre.ref,
        rest = _objectWithoutProperties(_activeChildren$curre, _excluded);

    return handleChange(rest);
  };

  var keyHandlerMap = (_keyHandlerMap = {}, _defineProperty(_keyHandlerMap, UP_KEY, handleKeyUpPressed), _defineProperty(_keyHandlerMap, DOWN_KEY, handleKeyDownPressed), _defineProperty(_keyHandlerMap, ENTER_KEY, handleKeyEnterPressed), _keyHandlerMap);

  var handleKeyPressed = function handleKeyPressed(event) {
    if (event.keyCode === SPACE_KEY && !enableSearch) {
      event.preventDefault();
    }

    if (preventDefaultKeys[event.keyCode]) event.preventDefault();

    if (keyHandlerMap[event.keyCode]) {
      keyHandlerMap[event.keyCode](event);
    }
  };

  var handleSearch = function handleSearch(event) {
    if (!allActiveChildren.current) {
      allActiveChildren.current = _toConsumableArray(activeChildren.current);
    }

    if (onSearch) {
      setActiveChildrenMap();
      fireSearch(event.target.value);
    } else {
      var filteredOptions = searchFilter({
        query: event.target.value,
        data: allActiveChildren.current
      });
      setActiveChildrenMap(filteredOptions.reduce(function (acc, option) {
        acc[option.name] = true;
        return acc;
      }, {}));
      resetActiveChild();
      setSearchValue(event.target.value);
    }

    setTimeout(function () {
      return updateScrollingArrows();
    }, 0);
  };

  var handleTopOptionClick = function handleTopOptionClick() {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return onChange(getAllValues(activeChildren.current));
      }

      return onChange([]);
    }

    if (value) {
      return onChange([]);
    }

    return onChange(getAllValues(activeChildren.current));
  };

  var context = useMemo(function () {
    var currentValues = getValueNames(value);
    return {
      privateOnClick: function privateOnClick(event, option) {
        return handleChange(option);
      },
      privateRegisterChild: registerChild,
      privateUnregisterChild: unregisterChild,
      privateOnHover: hoverChild,
      activeOptionName: activeOptionName,
      currentValues: currentValues,
      activeChildrenMap: activeChildrenMap,
      multiple: multiple,
      showCheckbox: showCheckbox
    };
  }, [value, registerChild, unregisterChild, hoverChild, activeOptionName, activeChildrenMap, handleChange, multiple, showCheckbox]);
  var isPlaceholderOptionChecked = isChecked(value, activeChildren.current);
  var shouldRenderPlaceholderOption = placeholder && showCheckbox;
  var showEmptyComponent = showEmptyMessage && EmptyComponent;
  return React.createElement(Dropdown, {
    id: id,
    role: "listbox",
    "aria-activedescendant": activeOptionName,
    isLoading: isLoading,
    className: className,
    style: style,
    onKeyDown: handleKeyPressed,
    tabIndex: "-1",
    ref: containerRef,
    borderRadius: borderRadius
  }, React.createElement(RenderIf, {
    isTrue: enableSearch
  }, React.createElement(SearchContainer, {
    isLoading: isLoading
  }, React.createElement(Icon, null), React.createElement(InputSearch, {
    onChange: handleSearch,
    ref: searchRef,
    type: "search"
  }))), React.createElement(UlContainer, null, React.createElement(RenderIf, {
    isTrue: showScrollUpArrow
  }, React.createElement(Arrow, {
    "data-id": "internal-dropdown-arrow-up",
    direction: "up",
    onMouseEnter: handleScrollUpArrowHover,
    onMouseLeave: stopArrowScoll
  })), React.createElement(Ul, {
    role: "presentation",
    onScroll: updateScrollingArrows,
    ref: menuRef,
    style: menuContainerStyles,
    showEmptyMessage: showEmptyMessage
  }, React.createElement(Content, {
    isLoading: isLoading
  }, React.createElement(Provider, {
    value: context
  }, React.createElement(RenderIf, {
    isTrue: shouldRenderPlaceholderOption
  }, React.createElement(PlaceholderOption, {
    name: "header",
    label: placeholder,
    onClick: handleTopOptionClick,
    isChecked: isPlaceholderOptionChecked,
    tabIndex: "-1"
  })), children))), showEmptyComponent && React.createElement(EmptyComponent, {
    searchValue: searchValue
  }), React.createElement(RenderIf, {
    isTrue: showEmptyMessage && !EmptyComponent
  }, React.createElement(EmptyMessage, {
    searchValue: searchValue,
    hasTimeout: !!searchTimeout.current
  })), React.createElement(RenderIf, {
    isTrue: showScrollDownArrow
  }, React.createElement(Arrow, {
    "data-id": "internal-dropdown-arrow-down",
    direction: "down",
    onMouseEnter: handleScrollDownArrowHover,
    onMouseLeave: stopArrowScoll
  }))));
});
InternalDropdown.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.shape({
    name: PropTypes.string
  }), PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })), PropTypes.string]),
  onChange: PropTypes.func,
  enableSearch: PropTypes.bool,
  multiple: PropTypes.bool,
  showCheckbox: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  debounce: PropTypes.bool,
  emptyComponent: PropTypes.node,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
InternalDropdown.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  isLoading: false,
  children: null,
  value: undefined,
  onChange: function onChange() {},
  enableSearch: false,
  multiple: false,
  showCheckbox: false,
  placeholder: undefined,
  onSearch: undefined,
  emptyComponent: undefined,
  debounce: false,
  borderRadius: 'rounded'
};
export default InternalDropdown;