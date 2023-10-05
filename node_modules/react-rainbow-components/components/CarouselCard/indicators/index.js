"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../libs/constants");

var _helpers = require("../helpers");

var _indicator = _interopRequireDefault(require("./indicator"));

var _indicatorsUl = _interopRequireDefault(require("../styled/indicatorsUl"));

var _hooks = require("../../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;
var SELECTOR = '[role="tab"]';

var Indicators = function Indicators(props) {
  var _keyHandlerMap;

  var carouselChildren = props.carouselChildren,
      onSelect = props.onSelect,
      selectedItem = props.selectedItem;
  var containerRef = (0, _react.useRef)();

  var _useChildrenRegister = (0, _hooks.useChildrenRegister)({
    containerRef: containerRef,
    selector: SELECTOR
  }),
      indicatorsRefs = _useChildrenRegister.childrenRegistered,
      register = _useChildrenRegister.register,
      unregister = _useChildrenRegister.unregister;

  var setAsSelectedIndicator = function setAsSelectedIndicator(tabIndex) {
    indicatorsRefs[tabIndex].ref.click();
    indicatorsRefs[tabIndex].ref.focus();
  };

  var selectIndicator = function selectIndicator(side) {
    var indicatorIndex = (0, _helpers.getItemIndex)(indicatorsRefs, selectedItem);

    if (indicatorIndex === indicatorsRefs.length - 1 && side === RIGHT_SIDE) {
      setAsSelectedIndicator(0);
    } else if (indicatorIndex === 0 && side === LEFT_SIDE) {
      setAsSelectedIndicator(indicatorsRefs.length - 1);
    } else {
      setAsSelectedIndicator(indicatorIndex + side);
    }
  };

  var keyHandlerMap = (_keyHandlerMap = {}, (0, _defineProperty2["default"])(_keyHandlerMap, _constants.RIGHT_KEY, function () {
    return selectIndicator(RIGHT_SIDE);
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.LEFT_KEY, function () {
    return selectIndicator(LEFT_SIDE);
  }), _keyHandlerMap);

  var handleKeyPressed = function handleKeyPressed(event) {
    if (keyHandlerMap[event.keyCode]) {
      return keyHandlerMap[event.keyCode]();
    }

    return null;
  };

  return _react["default"].createElement(_indicatorsUl["default"], {
    role: "tablist",
    onKeyDown: handleKeyPressed,
    ref: containerRef
  }, carouselChildren.map(function (_ref) {
    var id = _ref.id,
        containerId = _ref.containerId,
        header = _ref.header;
    return _react["default"].createElement(_indicator["default"], {
      id: id,
      containerId: containerId,
      header: header,
      onSelect: onSelect,
      selectedItem: selectedItem,
      onCreate: register,
      onDestroy: unregister,
      key: id
    });
  }));
};

Indicators.propTypes = {
  carouselChildren: _propTypes["default"].array,
  onSelect: _propTypes["default"].func,
  selectedItem: _propTypes["default"].string
};
Indicators.defaultProps = {
  carouselChildren: [],
  onSelect: function onSelect() {},
  selectedItem: undefined
};
var _default = Indicators;
exports["default"] = _default;