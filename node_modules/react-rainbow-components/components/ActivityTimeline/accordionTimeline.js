"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AccordionTimeline;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isChildRegistered = _interopRequireDefault(require("../InternalDropdown/helpers/isChildRegistered"));

var _insertChildOrderly = _interopRequireDefault(require("../InternalDropdown/helpers/insertChildOrderly"));

var _helpers = require("./helpers");

var _context = require("./context");

var _ul = _interopRequireDefault(require("./styled/ul"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AccordionTimeline(props) {
  var id = props.id,
      children = props.children,
      className = props.className,
      style = props.style,
      multiple = props.multiple,
      activeSectionNames = props.activeSectionNames,
      onToggleSection = props.onToggleSection;
  var registeredTimelineMarkers = (0, _react.useRef)([]);

  var _useState = (0, _react.useState)(activeSectionNames),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeNames = _useState2[0],
      setActiveNames = _useState2[1];

  var containerRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (activeSectionNames && activeSectionNames !== activeNames && typeof onToggleSection === 'function') {
      setActiveNames(activeSectionNames);
    }
  }, [activeSectionNames, onToggleSection]);
  var privateRegisterMarker = (0, _react.useCallback)(function (stepRef, stepProps) {
    if ((0, _isChildRegistered["default"])(stepProps.name, registeredTimelineMarkers.current)) return;

    var _getChildTimelineMark = (0, _helpers.getChildTimelineMarkersNodes)(containerRef.current),
        _getChildTimelineMark2 = (0, _toArray2["default"])(_getChildTimelineMark),
        nodes = _getChildTimelineMark2.slice(0);

    var newStepsList = (0, _insertChildOrderly["default"])(registeredTimelineMarkers.current, _objectSpread({
      ref: stepRef
    }, stepProps), nodes);
    registeredTimelineMarkers.current = newStepsList;
  }, []);
  var privateUnregisterMarker = (0, _react.useCallback)(function (stepRef, stepName) {
    if (!(0, _isChildRegistered["default"])(stepName, registeredTimelineMarkers.current)) return;
    registeredTimelineMarkers.current = registeredTimelineMarkers.current.filter(function (step) {
      return step.name !== stepName;
    });
  }, []);
  var privateOnToggleMarker = (0, _react.useCallback)(function (_ref) {
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
  var context = (0, _react.useMemo)(function () {
    return {
      activeNames: activeNames,
      multiple: multiple,
      privateRegisterMarker: privateRegisterMarker,
      privateUnregisterMarker: privateUnregisterMarker,
      privateOnToggleMarker: privateOnToggleMarker
    };
  }, [activeNames, multiple, privateRegisterMarker, privateUnregisterMarker, privateOnToggleMarker]);
  return _react["default"].createElement(_ul["default"], {
    id: id,
    className: className,
    style: style,
    ref: containerRef,
    variant: "accordion"
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, children));
}

AccordionTimeline.propTypes = {
  id: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  multiple: _propTypes["default"].bool,
  activeSectionNames: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string]),
  onToggleSection: _propTypes["default"].func
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