"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SingleCalendarHeader;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("../Select"));

var _rightArrow = _interopRequireDefault(require("./icons/rightArrow"));

var _leftArrow = _interopRequireDefault(require("./icons/leftArrow"));

var _controlsContainer = _interopRequireDefault(require("./styled/controlsContainer"));

var _monthContainer = _interopRequireDefault(require("./styled/monthContainer"));

var _month = _interopRequireDefault(require("./styled/month"));

var _arrowButton = _interopRequireDefault(require("./styled/arrowButton"));

var _useHeaderArrowNav2 = _interopRequireDefault(require("./hooks/useHeaderArrowNav"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SingleCalendarHeader(props) {
  var monthLabelId = props.monthLabelId,
      currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      formattedMonth = props.formattedMonth,
      disablePreviousMonth = props.disablePreviousMonth,
      disableNextMonth = props.disableNextMonth,
      onPrevMonthClick = props.onPrevMonthClick,
      onNextMonthClick = props.onNextMonthClick,
      onYearChange = props.onYearChange;
  var refs = [(0, _react.useRef)(), (0, _react.useRef)(), (0, _react.useRef)()];

  var _useHeaderArrowNav = (0, _useHeaderArrowNav2["default"])({
    disableNextMonth: disableNextMonth,
    disablePreviousMonth: disablePreviousMonth,
    refs: refs,
    delta: disableNextMonth ? 2 : 1,
    firstIndex: disablePreviousMonth ? 1 : 0,
    lastIndex: 2
  }),
      updateFocusedItem = _useHeaderArrowNav.updateFocusedItem,
      clearFocusedItems = _useHeaderArrowNav.clearFocusedItems,
      handleKeyDown = _useHeaderArrowNav.handleKeyDown;

  var handlePrevMonthClick = (0, _react.useCallback)(function () {
    onPrevMonthClick();
    updateFocusedItem(0);
  }, [onPrevMonthClick, updateFocusedItem]);
  var handleNextMonthClick = (0, _react.useCallback)(function () {
    onNextMonthClick();
    updateFocusedItem(1);
  }, [onNextMonthClick, updateFocusedItem]);
  var handleYearSelectClick = (0, _react.useCallback)(function () {
    updateFocusedItem(2);
  }, [updateFocusedItem]);
  var nextMonthTabIndex = disablePreviousMonth ? undefined : -1;
  var yearSelectTabIndex = disablePreviousMonth && disableNextMonth ? undefined : -1;
  return _react["default"].createElement(_controlsContainer["default"], {
    onKeyDown: handleKeyDown
  }, _react["default"].createElement(_monthContainer["default"], null, _react["default"].createElement(_arrowButton["default"], {
    ref: refs[0],
    onClick: handlePrevMonthClick,
    size: "medium",
    disabled: disablePreviousMonth,
    icon: _react["default"].createElement(_leftArrow["default"], null),
    assistiveText: "Previous Month",
    onFocus: function onFocus() {
      return updateFocusedItem(0);
    },
    onBlur: clearFocusedItems
  }), _react["default"].createElement(_month["default"], {
    id: monthLabelId,
    "data-id": "month"
  }, formattedMonth), _react["default"].createElement(_arrowButton["default"], {
    ref: refs[1],
    onClick: handleNextMonthClick,
    size: "medium",
    tabIndex: nextMonthTabIndex,
    disabled: disableNextMonth,
    icon: _react["default"].createElement(_rightArrow["default"], null),
    assistiveText: "Next Month",
    onFocus: function onFocus() {
      return updateFocusedItem(1);
    },
    onBlur: clearFocusedItems
  })), _react["default"].createElement(_Select["default"], {
    ref: refs[2],
    label: "select year",
    hideLabel: true,
    tabIndex: yearSelectTabIndex,
    value: currentYear,
    options: yearsRange,
    onChange: onYearChange,
    onClick: handleYearSelectClick,
    onFocus: function onFocus() {
      return updateFocusedItem(2);
    },
    onBlur: clearFocusedItems
  }));
}

SingleCalendarHeader.propTypes = {
  monthLabelId: _propTypes["default"].string,
  formattedMonth: _propTypes["default"].string,
  currentYear: _propTypes["default"].number,
  yearsRange: _propTypes["default"].array,
  disablePreviousMonth: _propTypes["default"].bool,
  disableNextMonth: _propTypes["default"].bool,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onYearChange: _propTypes["default"].func
};
SingleCalendarHeader.defaultProps = {
  monthLabelId: undefined,
  formattedMonth: undefined,
  currentYear: undefined,
  yearsRange: [],
  disablePreviousMonth: false,
  disableNextMonth: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onYearChange: function onYearChange() {}
};