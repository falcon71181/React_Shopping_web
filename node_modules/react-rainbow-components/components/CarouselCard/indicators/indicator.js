"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../../AssistiveText"));

var _indicatorLi = _interopRequireDefault(require("../styled/indicatorLi"));

var _indicatorButton = _interopRequireDefault(require("../styled/indicatorButton"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getAssistiveText(header) {
  if (typeof header === 'string') {
    return "".concat(header, " Tab");
  }

  return undefined;
}

var Indicator = function Indicator(props) {
  var id = props.id,
      containerId = props.containerId,
      header = props.header,
      onSelect = props.onSelect,
      selectedItem = props.selectedItem,
      onCreate = props.onCreate,
      onDestroy = props.onDestroy;
  var indicatorRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    onCreate({
      id: id,
      ref: indicatorRef.current
    });
    return function () {
      onDestroy(id);
    };
  }, []);
  var assistiveText = getAssistiveText(header);
  var isSelected = selectedItem === id;
  var tabIndex = isSelected ? 0 : -1;
  return _react["default"].createElement(_indicatorLi["default"], {
    role: "presentation",
    key: id
  }, _react["default"].createElement(_indicatorButton["default"], {
    id: id,
    isSelected: isSelected,
    role: "tab",
    tabIndex: tabIndex,
    "aria-selected": isSelected,
    "aria-controls": containerId,
    title: assistiveText,
    onClick: function onClick() {
      return onSelect(id);
    },
    ref: indicatorRef
  }, _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  })));
};

Indicator.propTypes = {
  id: _propTypes["default"].string,
  containerId: _propTypes["default"].string,
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onSelect: _propTypes["default"].func,
  onCreate: _propTypes["default"].func,
  onDestroy: _propTypes["default"].func,
  selectedItem: _propTypes["default"].string
};
Indicator.defaultProps = {
  id: undefined,
  containerId: undefined,
  header: undefined,
  onSelect: function onSelect() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  selectedItem: undefined
};
var _default = Indicator;
exports["default"] = _default;