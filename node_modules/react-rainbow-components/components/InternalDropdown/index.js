"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _constants = require("../../libs/constants");

var _context = require("./context");

var _content = _interopRequireDefault(require("./content"));

var _isChildRegistered = _interopRequireDefault(require("./helpers/isChildRegistered"));

var _getChildMenuItemNodes = _interopRequireDefault(require("./helpers/getChildMenuItemNodes"));

var _insertChildOrderly = _interopRequireDefault(require("./helpers/insertChildOrderly"));

var _isScrollPositionAtMenuBottom = _interopRequireDefault(require("./helpers/isScrollPositionAtMenuBottom"));

var _isOptionVisible = _interopRequireDefault(require("./helpers/isOptionVisible"));

var _scrollTo = _interopRequireDefault(require("./helpers/scrollTo"));

var _searchFilter = _interopRequireDefault(require("./helpers/searchFilter"));

var _getValueNames = _interopRequireDefault(require("./helpers/getValueNames"));

var _isEmptyObject = _interopRequireDefault(require("./helpers/isEmptyObject"));

var _emptyMessage = _interopRequireDefault(require("./emptyMessage"));

var _styled = require("./styled");

var _placeholderOption = _interopRequireDefault(require("./placeholderOption"));

var _isChecked = _interopRequireDefault(require("./helpers/isChecked"));

var _getAllValues = _interopRequireDefault(require("./helpers/getAllValues"));

var _excluded = ["ref"];

var _preventDefaultKeys;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var sizeMap = {
  medium: 227
};
var preventDefaultKeys = (_preventDefaultKeys = {}, (0, _defineProperty2["default"])(_preventDefaultKeys, _constants.UP_KEY, true), (0, _defineProperty2["default"])(_preventDefaultKeys, _constants.DOWN_KEY, true), _preventDefaultKeys);
var menuContainerStyles = {
  maxHeight: sizeMap.medium
};
var InternalDropdown = (0, _react.forwardRef)(function (props, reference) {
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

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showScrollUpArrow = _useState2[0],
      setShowScrollUpArrow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showScrollDownArrow = _useState4[0],
      setShowScrollDownArrow = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      activeOptionName = _useState6[0],
      setActiveOptionName = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      activeOptionIndex = _useState8[0],
      setActiveOptionIndex = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      activeChildrenMap = _useState10[0],
      setActiveChildrenMap = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      searchValue = _useState12[0],
      setSearchValue = _useState12[1];

  var activeChildren = (0, _react.useRef)([]);
  var allActiveChildren = (0, _react.useRef)();
  var firstChild = (0, _react.useRef)();
  var menuRef = (0, _react.useRef)();
  var containerRef = (0, _react.useRef)();
  var scrollingTimer = (0, _react.useRef)();
  var searchRef = (0, _react.useRef)();
  var searchTimeout = (0, _react.useRef)();
  var showEmptyMessage = enableSearch && onSearch ? !isLoading && _react["default"].Children.count(children) === 0 : !isLoading && (0, _isEmptyObject["default"])(activeChildrenMap);
  (0, _react.useImperativeHandle)(reference, function () {
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
  var isComponentMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isComponentMounted.current = false;
    };
  }, []);

  var updateScrollingArrows = function updateScrollingArrows() {
    var menu = menuRef.current;
    setShowScrollUpArrow(menu.scrollTop > 0);
    setShowScrollDownArrow(!(0, _isScrollPositionAtMenuBottom["default"])(menu));
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

  (0, _react.useEffect)(function () {
    (0, _scrollTo["default"])(menuRef, 0);
    updateScrollingArrows();
  }, []);
  var registerChild = (0, _react.useCallback)(function (childRef, childProps) {
    if (!isComponentMounted.current) return;
    if ((0, _isChildRegistered["default"])(childProps.name, activeChildren.current)) return;

    var _getChildMenuItemNode = (0, _getChildMenuItemNodes["default"])(containerRef.current),
        _getChildMenuItemNode2 = (0, _toArray2["default"])(_getChildMenuItemNode),
        nodes = _getChildMenuItemNode2.slice(0);

    var newChildren = (0, _insertChildOrderly["default"])(activeChildren.current, _objectSpread({
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
  var unregisterChild = (0, _react.useCallback)(function (childRef, name) {
    if (!isComponentMounted.current) return;
    if (!(0, _isChildRegistered["default"])(name, activeChildren.current)) return;
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
  var hoverChild = (0, _react.useCallback)(function (event, name) {
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
      if (!(0, _isScrollPositionAtMenuBottom["default"])(menu)) {
        menu.scrollBy(0, 1);
      } else {
        stopArrowScoll();
      }
    }, 5);
  };

  var scrollToOption = function scrollToOption(nextFocusedIndex) {
    var currentFocusedOptionRef = activeChildren.current[activeOptionIndex].ref;
    var nextFocusedOptionRef = activeChildren.current[nextFocusedIndex].ref;

    if (!(0, _isOptionVisible["default"])(nextFocusedOptionRef, menuRef.current)) {
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

  var handleChange = (0, _react.useCallback)(function (option) {
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
        (0, _scrollTo["default"])(menuRef, 0);
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
        rest = (0, _objectWithoutProperties2["default"])(_activeChildren$curre, _excluded);
    return handleChange(rest);
  };

  var keyHandlerMap = (_keyHandlerMap = {}, (0, _defineProperty2["default"])(_keyHandlerMap, _constants.UP_KEY, handleKeyUpPressed), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.DOWN_KEY, handleKeyDownPressed), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.ENTER_KEY, handleKeyEnterPressed), _keyHandlerMap);

  var handleKeyPressed = function handleKeyPressed(event) {
    if (event.keyCode === _constants.SPACE_KEY && !enableSearch) {
      event.preventDefault();
    }

    if (preventDefaultKeys[event.keyCode]) event.preventDefault();

    if (keyHandlerMap[event.keyCode]) {
      keyHandlerMap[event.keyCode](event);
    }
  };

  var handleSearch = function handleSearch(event) {
    if (!allActiveChildren.current) {
      allActiveChildren.current = (0, _toConsumableArray2["default"])(activeChildren.current);
    }

    if (onSearch) {
      setActiveChildrenMap();
      fireSearch(event.target.value);
    } else {
      var filteredOptions = (0, _searchFilter["default"])({
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
        return onChange((0, _getAllValues["default"])(activeChildren.current));
      }

      return onChange([]);
    }

    if (value) {
      return onChange([]);
    }

    return onChange((0, _getAllValues["default"])(activeChildren.current));
  };

  var context = (0, _react.useMemo)(function () {
    var currentValues = (0, _getValueNames["default"])(value);
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
  var isPlaceholderOptionChecked = (0, _isChecked["default"])(value, activeChildren.current);
  var shouldRenderPlaceholderOption = placeholder && showCheckbox;
  var showEmptyComponent = showEmptyMessage && EmptyComponent;
  return _react["default"].createElement(_styled.Dropdown, {
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
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: enableSearch
  }, _react["default"].createElement(_styled.SearchContainer, {
    isLoading: isLoading
  }, _react["default"].createElement(_styled.Icon, null), _react["default"].createElement(_styled.InputSearch, {
    onChange: handleSearch,
    ref: searchRef,
    type: "search"
  }))), _react["default"].createElement(_styled.UlContainer, null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: showScrollUpArrow
  }, _react["default"].createElement(_styled.Arrow, {
    "data-id": "internal-dropdown-arrow-up",
    direction: "up",
    onMouseEnter: handleScrollUpArrowHover,
    onMouseLeave: stopArrowScoll
  })), _react["default"].createElement(_styled.Ul, {
    role: "presentation",
    onScroll: updateScrollingArrows,
    ref: menuRef,
    style: menuContainerStyles,
    showEmptyMessage: showEmptyMessage
  }, _react["default"].createElement(_content["default"], {
    isLoading: isLoading
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: shouldRenderPlaceholderOption
  }, _react["default"].createElement(_placeholderOption["default"], {
    name: "header",
    label: placeholder,
    onClick: handleTopOptionClick,
    isChecked: isPlaceholderOptionChecked,
    tabIndex: "-1"
  })), children))), showEmptyComponent && _react["default"].createElement(EmptyComponent, {
    searchValue: searchValue
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: showEmptyMessage && !EmptyComponent
  }, _react["default"].createElement(_emptyMessage["default"], {
    searchValue: searchValue,
    hasTimeout: !!searchTimeout.current
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: showScrollDownArrow
  }, _react["default"].createElement(_styled.Arrow, {
    "data-id": "internal-dropdown-arrow-down",
    direction: "down",
    onMouseEnter: handleScrollDownArrowHover,
    onMouseLeave: stopArrowScoll
  }))));
});
InternalDropdown.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  isLoading: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    name: _propTypes["default"].string
  }), _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string
  })), _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  enableSearch: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  showCheckbox: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  onSearch: _propTypes["default"].func,
  debounce: _propTypes["default"].bool,
  emptyComponent: _propTypes["default"].node,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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
var _default = InternalDropdown;
exports["default"] = _default;