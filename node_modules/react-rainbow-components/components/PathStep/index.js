"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PathStep;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _context = require("../Path/context");

var _helpers = require("./helpers");

var _styled = require("./styled");

var _checkMark = _interopRequireDefault(require("./icons/checkMark"));

var _exclamation = _interopRequireDefault(require("./icons/exclamation"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PathStep(props) {
  var name = props.name,
      label = props.label,
      hasError = props.hasError,
      className = props.className,
      style = props.style;

  var _useContext = (0, _react.useContext)(_context.PathContext),
      selectedIndex = _useContext.selectedIndex,
      hoveredIndex = _useContext.hoveredIndex,
      privateGetStepIndex = _useContext.privateGetStepIndex,
      privateGetStepZIndex = _useContext.privateGetStepZIndex,
      privateRegisterStep = _useContext.privateRegisterStep,
      privateUnregisterStep = _useContext.privateUnregisterStep,
      privateUpdateStepProps = _useContext.privateUpdateStepProps,
      privateUpdateHoveredStep = _useContext.privateUpdateHoveredStep,
      privateOnClick = _useContext.privateOnClick;

  var stepRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    privateRegisterStep(stepRef.current, {
      name: name,
      label: label,
      hasError: hasError
    });
    return function () {
      privateUnregisterStep(stepRef, name);
    };
  }, []);
  (0, _react.useEffect)(function () {
    privateUpdateStepProps({
      name: name,
      label: label,
      hasError: hasError
    });
  }, [name, label, hasError, privateUpdateStepProps]);
  var index = privateGetStepIndex(name);
  var activeStepIndex = (0, _react.useMemo)(function () {
    return (0, _helpers.getActiveStepIndex)({
      hoveredIndex: hoveredIndex,
      selectedIndex: selectedIndex
    });
  }, [hoveredIndex, selectedIndex]);
  var isChecked = activeStepIndex > index;
  var isSelected = (0, _react.useMemo)(function () {
    return (0, _helpers.isStepSelected)({
      index: index,
      hoveredIndex: hoveredIndex,
      selectedIndex: selectedIndex
    });
  }, [hoveredIndex, index, selectedIndex]);
  var renderCheckIcon = !hasError && (isChecked || isSelected || activeStepIndex === index);
  return _react["default"].createElement(_styled.StyledStepItem, {
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
  }, label, _react["default"].createElement(_RenderIf["default"], {
    isTrue: renderCheckIcon
  }, _react["default"].createElement(_checkMark["default"], null)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasError
  }, _react["default"].createElement(_exclamation["default"], null)));
}

PathStep.propTypes = {
  name: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  hasError: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
PathStep.defaultProps = {
  label: undefined,
  hasError: false,
  className: undefined,
  style: undefined
};