"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AccordionTimelineMarker;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _hooks = require("../../libs/hooks");

var _context = require("../ActivityTimeline/context");

var _calendarIcon = _interopRequireDefault(require("./calendarIcon"));

var _li = _interopRequireDefault(require("./styled/li"));

var _columnLeft = _interopRequireDefault(require("./styled/columnLeft"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

var _contentContainer = _interopRequireDefault(require("./styled/contentContainer"));

var _header = _interopRequireDefault(require("./styled/header"));

var _label = _interopRequireDefault(require("./styled/label"));

var _datetime = _interopRequireDefault(require("./styled/datetime"));

var _description = _interopRequireDefault(require("./styled/description"));

var _body = _interopRequireDefault(require("./styled/body"));

var _expandCollapseButton = _interopRequireDefault(require("./expandCollapseButton"));

var _helpers = require("../AccordionSection/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AccordionTimelineMarker(props) {
  var icon = props.icon,
      name = props.name,
      isLoading = props.isLoading,
      label = props.label,
      description = props.description,
      datetime = props.datetime,
      children = props.children,
      className = props.className,
      style = props.style;

  var _useContext = (0, _react.useContext)(_context.ActivityTimelineContext),
      activeNames = _useContext.activeNames,
      multiple = _useContext.multiple,
      privateRegisterMarker = _useContext.privateRegisterMarker,
      privateUnregisterMarker = _useContext.privateUnregisterMarker,
      privateOnToggleMarker = _useContext.privateOnToggleMarker;

  var generatedName = (0, _hooks.useUniqueIdentifier)('timeline-marker');
  var currentName = (0, _react.useMemo)(function () {
    return name || generatedName;
  }, [generatedName, name]);
  var stepRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    privateRegisterMarker(stepRef.current, {
      currentName: currentName
    });
    return function () {
      privateUnregisterMarker(stepRef, currentName);
    };
  }, []);
  var resolveActiveNamesWhenMultiple = (0, _react.useCallback)(function () {
    if (activeNames === undefined) {
      return [currentName];
    }

    if ((0, _helpers.isInArray)(activeNames, currentName)) {
      return (0, _helpers.removeItemFromArray)(activeNames, currentName);
    }

    return activeNames.concat([currentName]);
  }, [currentName, activeNames]);
  var resolveActiveNames = (0, _react.useCallback)(function () {
    if (multiple) {
      return resolveActiveNamesWhenMultiple();
    }

    if (currentName === activeNames) {
      return '';
    }

    return currentName;
  }, [currentName, multiple, activeNames, resolveActiveNamesWhenMultiple]);
  var handleToggleMarker = (0, _react.useCallback)(function () {
    return privateOnToggleMarker({
      activeSectionNames: resolveActiveNames(),
      toggledSection: currentName
    });
  }, [currentName, privateOnToggleMarker, resolveActiveNames]);
  var isExpanded = (0, _react.useMemo)(function () {
    if (multiple && Array.isArray(activeNames)) {
      return (0, _helpers.isInArray)(activeNames, currentName);
    }

    return activeNames === currentName;
  }, [currentName, activeNames, multiple]);
  var shouldRenderChildren = (0, _react.useMemo)(function () {
    return isExpanded && !isLoading;
  }, [isLoading, isExpanded]);
  return _react["default"].createElement(_li["default"], {
    "data-id": "timeline-marker-li",
    className: className,
    style: style
  }, _react["default"].createElement(_columnLeft["default"], null, _react["default"].createElement(_iconContainer["default"], null, _react["default"].createElement(_expandCollapseButton["default"], {
    isExpanded: isExpanded,
    isLoading: isLoading,
    onClick: handleToggleMarker
  }), icon)), _react["default"].createElement(_contentContainer["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_header["default"], null, _react["default"].createElement(_label["default"], null, label), _react["default"].createElement(_datetime["default"], null, datetime)), _react["default"].createElement(_description["default"], null, description)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: shouldRenderChildren
  }, _react["default"].createElement(_body["default"], null, children))));
}

AccordionTimelineMarker.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  datetime: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  name: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool
};
AccordionTimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: _react["default"].createElement(_calendarIcon["default"], null),
  children: null,
  className: undefined,
  style: undefined,
  name: undefined,
  isLoading: false
};