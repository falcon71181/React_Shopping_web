"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Path;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _isChildRegistered = _interopRequireDefault(require("../InternalDropdown/helpers/isChildRegistered"));

var _insertChildOrderly = _interopRequireDefault(require("../InternalDropdown/helpers/insertChildOrderly"));

var _helpers = require("./helpers");

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Path(props) {
  var currentStepName = props.currentStepName,
      onClick = props.onClick,
      children = props.children,
      id = props.id,
      className = props.className,
      style = props.style;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hoveredStepName = _useState2[0],
      setHoveredStepName = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      stepsCount = _useState4[0],
      setStepsCount = _useState4[1];

  var registeredSteps = (0, _react.useRef)([]);
  var containerRef = (0, _react.useRef)();
  var privateRegisterStep = (0, _react.useCallback)(function (stepRef, stepProps) {
    if ((0, _isChildRegistered["default"])(stepProps.name, registeredSteps.current)) return;

    var _getChildStepsNodes = (0, _helpers.getChildStepsNodes)(containerRef.current),
        _getChildStepsNodes2 = (0, _toArray2["default"])(_getChildStepsNodes),
        nodes = _getChildStepsNodes2.slice(0);

    var newStepsList = (0, _insertChildOrderly["default"])(registeredSteps.current, _objectSpread({
      ref: stepRef
    }, stepProps), nodes);
    registeredSteps.current = newStepsList;
    setStepsCount(registeredSteps.current.length);
  }, []);
  var privateUnregisterStep = (0, _react.useCallback)(function (stepRef, stepName) {
    if (!(0, _isChildRegistered["default"])(stepName, registeredSteps.current)) return;
    registeredSteps.current = registeredSteps.current.filter(function (step) {
      return step.name !== stepName;
    });
    setStepsCount(registeredSteps.current.length);
  }, []);
  var getStepIndex = (0, _react.useCallback)(function (name) {
    return registeredSteps.current.findIndex(function (step) {
      return step.name === name;
    });
  }, []);
  var privateGetStepZIndex = (0, _react.useCallback)(function (name) {
    return stepsCount - getStepIndex(name);
  }, [getStepIndex, stepsCount]);
  var privateUpdateStepProps = (0, _react.useCallback)(function (stepProps) {
    if (!(0, _isChildRegistered["default"])(stepProps.name, registeredSteps.current)) return;
    var index = registeredSteps.current.findIndex(function (registeredStep) {
      return registeredStep.name === stepProps.name;
    });
    var updatedStep = registeredSteps.current[index];
    registeredSteps.current[index] = _objectSpread(_objectSpread({}, updatedStep), stepProps);
  }, []);
  var context = (0, _react.useMemo)(function () {
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
  return _react["default"].createElement(_styled.StyledContainer, {
    id: id,
    className: className,
    style: style,
    ref: containerRef
  }, _react["default"].createElement(_styled.StyledStepsList, null, _react["default"].createElement(_context.Provider, {
    value: context
  }, children)));
}

Path.propTypes = {
  currentStepName: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Path.defaultProps = {
  currentStepName: undefined,
  onClick: function onClick() {},
  children: null,
  id: undefined,
  className: undefined,
  style: undefined
};