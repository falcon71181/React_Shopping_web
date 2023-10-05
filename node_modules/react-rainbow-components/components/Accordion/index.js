"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _constants = require("../../libs/constants");

var _ul = _interopRequireDefault(require("./styled/ul"));

var _hooks = require("../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var containerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(activeSectionNames),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeNames = _useState2[0],
      setActiveNames = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      currentSection = _useState4[0],
      setCurrentSection = _useState4[1];

  var _useChildrenRegisterR = (0, _hooks.useChildrenRegisterRef)({
    containerRef: containerRef,
    selector: SELECTOR
  }),
      childrenRegistered = _useChildrenRegisterR.childrenRegistered,
      register = _useChildrenRegisterR.register,
      unregister = _useChildrenRegisterR.unregister;

  (0, _react.useEffect)(function () {
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

  var keyHandlerMap = (_keyHandlerMap = {}, (0, _defineProperty2["default"])(_keyHandlerMap, _constants.RIGHT_KEY, function () {
    return selectAccordionSection(RIGHT_SIDE);
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.LEFT_KEY, function () {
    return selectAccordionSection(LEFT_SIDE);
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.DOWN_KEY, function () {
    return selectAccordionSection(RIGHT_SIDE);
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.UP_KEY, function () {
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
  return _react["default"].createElement(_ul["default"], {
    ref: containerRef,
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, children));
};

Accordion.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  multiple: _propTypes["default"].bool,
  onToggleSection: _propTypes["default"].func,
  activeSectionNames: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string])
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
var _default = Accordion;
exports["default"] = _default;