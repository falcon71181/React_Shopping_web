"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Structural = require("../../../Structural");

var _hooks = require("../../../../libs/hooks");

var _options = _interopRequireDefault(require("./options"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var YearSelect = _react["default"].forwardRef(function (props, ref) {
  var currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      onYearChange = props.onYearChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      tabIndex = props.tabIndex;
  var selectRef = (0, _react.useRef)();
  var selectId = (0, _hooks.useUniqueIdentifier)('select');

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isEditMode = _useState2[0],
      setEditMode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return selectRef.current;
  }, []);
  var handleYearChange = (0, _react.useCallback)(function (value) {
    selectRef.current.blur();
    onYearChange(value);
  }, [onYearChange, selectRef]);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    if (!isFocused) setEditMode(true);
  }, [isFocused]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    if (!isFocused) setEditMode(false);
  }, [isFocused]);
  var handleSelectFocus = (0, _react.useCallback)(function () {
    onFocus();
    setIsFocused(true);
  }, [onFocus]);
  var handleSelectBlur = (0, _react.useCallback)(function () {
    onBlur();
    setIsFocused(false);
  }, [onBlur]);
  (0, _react.useEffect)(function () {
    setEditMode(isFocused);
  }, [isFocused]);
  return _react["default"].createElement(_styled.StyledContainer, {
    editMode: isEditMode,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, _react["default"].createElement(_Structural.HiddenElement, {
    as: "label",
    htmlFor: selectId
  }, "select year"), _react["default"].createElement(_styled.StyledSelect, {
    id: selectId,
    ref: selectRef,
    value: currentYear,
    editMode: isEditMode,
    onClick: onClick,
    onChange: handleYearChange,
    onFocus: handleSelectFocus,
    onBlur: handleSelectBlur,
    tabIndex: tabIndex
  }, _react["default"].createElement(_options["default"], {
    options: yearsRange
  })));
});

YearSelect.propTypes = {
  currentYear: _propTypes["default"].number,
  yearsRange: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onYearChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
YearSelect.defaultProps = {
  currentYear: undefined,
  yearsRange: [],
  onYearChange: function onYearChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  tabIndex: undefined
};
var _default = YearSelect;
exports["default"] = _default;