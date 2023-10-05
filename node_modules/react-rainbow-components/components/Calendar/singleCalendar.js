"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _daysOfWeek = _interopRequireDefault(require("./daysOfWeek"));

var _month = _interopRequireDefault(require("./month"));

var _helpers = require("./helpers");

var _calendarHeader = _interopRequireDefault(require("./calendarHeader"));

var _table = _interopRequireDefault(require("./styled/table"));

var _constants = require("../../libs/constants");

var _utils = require("../../libs/utils");

var _context = require("./context");

var _normalizeDates = _interopRequireDefault(require("./helpers/normalizeDates"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SingleCalendar = function (_Component) {
  (0, _inherits2["default"])(SingleCalendar, _Component);

  var _super = _createSuper(SingleCalendar);

  function SingleCalendar(props) {
    var _this$keyHandlerMap, _this$keyHandlerMapAl;

    var _this;

    (0, _classCallCheck2["default"])(this, SingleCalendar);
    _this = _super.call(this, props);
    _this.state = {
      focusedDate: (0, _helpers.normalizeDate)(props.value),
      currentMonth: (0, _helpers.getFirstDayMonth)((0, _helpers.normalizeDate)(props.value)),
      currentRange: props.selectedRange,
      maxRangeEnd: undefined
    };
    _this.enableNavKeys = false;
    _this.monthLabelId = (0, _utils.uniqueId)('month');
    _this.previousMonth = _this.previousMonth.bind((0, _assertThisInitialized2["default"])(_this));
    _this.nextMonth = _this.nextMonth.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleYearChange = _this.handleYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyUpPressed = _this.handleKeyUpPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDownPressed = _this.handleKeyDownPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyLeftPressed = _this.handleKeyLeftPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyRightPressed = _this.handleKeyRightPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyHomePressed = _this.handleKeyHomePressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyEndPressed = _this.handleKeyEndPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPageUpPressed = _this.handleKeyPageUpPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPageDownPressed = _this.handleKeyPageDownPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyEnterPressed = _this.handleKeyEnterPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyAltPageUpPressed = _this.handleKeyAltPageUpPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyAltPageDownPressed = _this.handleKeyAltPageDownPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.UP_KEY, _this.handleKeyUpPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.DOWN_KEY, _this.handleKeyDownPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.LEFT_KEY, _this.handleKeyLeftPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.RIGHT_KEY, _this.handleKeyRightPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.HOME_KEY, _this.handleKeyHomePressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.END_KEY, _this.handleKeyEndPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.PAGEUP_KEY, _this.handleKeyPageUpPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.PAGEDN_KEY, _this.handleKeyPageDownPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.SPACE_KEY, _this.handleKeyEnterPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.ENTER_KEY, _this.handleKeyEnterPressed), _this$keyHandlerMap);
    _this.keyHandlerMapAlt = (_this$keyHandlerMapAl = {}, (0, _defineProperty2["default"])(_this$keyHandlerMapAl, _constants.HOME_KEY, _this.handleKeyHomePressed), (0, _defineProperty2["default"])(_this$keyHandlerMapAl, _constants.END_KEY, _this.handleKeyEndPressed), (0, _defineProperty2["default"])(_this$keyHandlerMapAl, _constants.PAGEUP_KEY, _this.handleKeyAltPageUpPressed), (0, _defineProperty2["default"])(_this$keyHandlerMapAl, _constants.PAGEDN_KEY, _this.handleKeyAltPageDownPressed), _this$keyHandlerMapAl);
    _this.onDayFocus = _this.onDayFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayBlur = _this.onDayBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayHover = _this.onDayHover.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(SingleCalendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevSelectedRange = prevProps.selectedRange,
          prevValue = prevProps.value;
      var _this$props = this.props,
          selectedRange = _this$props.selectedRange,
          value = _this$props.value;
      var normalizedDate = (0, _helpers.normalizeDate)(value);

      if ((0, _helpers.formatDate)((0, _helpers.normalizeDate)(prevValue)) !== (0, _helpers.formatDate)(normalizedDate)) {
        this.updateCurrentMonth(normalizedDate);
        this.updateFocusedDate(normalizedDate);
      }

      if (!(0, _helpers.isSameDatesRange)(prevSelectedRange, selectedRange)) {
        this.updateCurrentRange(selectedRange);
      }
    }
  }, {
    key: "onDayFocus",
    value: function onDayFocus() {
      this.enableNavKeys = true;
    }
  }, {
    key: "onDayBlur",
    value: function onDayBlur() {
      this.enableNavKeys = false;
    }
  }, {
    key: "onDayHover",
    value: function onDayHover(date) {
      var _this$props2 = this.props,
          selectionType = _this$props2.selectionType,
          selectedRange = _this$props2.selectedRange;
      if (selectionType === 'single' || (0, _helpers.isEmptyRange)(selectedRange)) return;

      var _selectedRange = (0, _slicedToArray2["default"])(selectedRange, 2),
          rangeStart = _selectedRange[0],
          rangeEnd = _selectedRange[1];

      if (rangeEnd !== undefined) return;
      var currentRange = this.state.currentRange;

      var _currentRange = (0, _slicedToArray2["default"])(currentRange, 1),
          currentRangeStart = _currentRange[0];

      if ((0, _helpers.isDateBelowLimit)(date, rangeStart)) {
        this.setState({
          currentRange: [currentRangeStart]
        });
      } else {
        this.setState({
          currentRange: [rangeStart, date]
        });
      }
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var _this$state = this.state,
          focusedDate = _this$state.focusedDate,
          currentRange = _this$state.currentRange,
          maxRangeEnd = _this$state.maxRangeEnd;
      var _this$props3 = this.props,
          selectionType = _this$props3.selectionType,
          selectedRange = _this$props3.selectedRange,
          disabledDays = _this$props3.disabledDays;
      return {
        focusedDate: focusedDate,
        useAutoFocus: this.enableNavKeys,
        selectionType: selectionType,
        selectedRange: selectedRange,
        currentRange: currentRange,
        disabledDays: disabledDays,
        maxRangeEnd: maxRangeEnd,
        privateKeyDown: this.handleKeyDown,
        privateOnFocus: this.onDayFocus,
        privateOnBlur: this.onDayBlur,
        privateOnHover: this.onDayHover
      };
    }
  }, {
    key: "moveFocusedDay",
    value: function moveFocusedDay(increment) {
      var _this$state2 = this.state,
          currentMonth = _this$state2.currentMonth,
          focusedDate = _this$state2.focusedDate;
      var nextFocusedDate = (0, _helpers.addDays)(focusedDate, increment);
      var nextFocusedMonth = currentMonth;

      if (!(0, _helpers.isSameMonth)(nextFocusedDate, currentMonth)) {
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)((0, _helpers.addMonths)(currentMonth, (0, _helpers.getSign)(increment)));
      }

      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate;

      var _getCalendarBounds = (0, _helpers.getCalendarBounds)(minDate, maxDate),
          minCalendarDate = _getCalendarBounds.minCalendarDate,
          maxCalendarDate = _getCalendarBounds.maxCalendarDate;

      if ((0, _helpers.isDateBelowLimit)(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)(minCalendarDate);
      } else if ((0, _helpers.isDateBeyondLimit)(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)(maxCalendarDate);
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: nextFocusedMonth
      });
    }
  }, {
    key: "moveFocusedMonth",
    value: function moveFocusedMonth(increment) {
      var focusedDate = this.state.focusedDate;
      var nextFocusedDate = (0, _helpers.addMonths)(focusedDate, increment);
      var _this$props5 = this.props,
          minDate = _this$props5.minDate,
          maxDate = _this$props5.maxDate;

      var _getCalendarBounds2 = (0, _helpers.getCalendarBounds)(minDate, maxDate),
          minCalendarDate = _getCalendarBounds2.minCalendarDate,
          maxCalendarDate = _getCalendarBounds2.maxCalendarDate;

      if ((0, _helpers.isDateBelowLimit)(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
      } else if ((0, _helpers.isDateBeyondLimit)(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: (0, _helpers.getFirstDayMonth)(nextFocusedDate)
      });
    }
  }, {
    key: "updateCurrentMonth",
    value: function updateCurrentMonth(value) {
      this.setState({
        currentMonth: (0, _helpers.getFirstDayMonth)(value)
      });
    }
  }, {
    key: "updateFocusedDate",
    value: function updateFocusedDate(value) {
      this.setState({
        focusedDate: value
      });
    }
  }, {
    key: "updateCurrentRange",
    value: function updateCurrentRange(value) {
      var disabledDaysInProps = this.props.disabledDays;
      var disabledDays = (0, _normalizeDates["default"])(disabledDaysInProps);
      var maxRangeEnd = value.length === 1 ? Math.min.apply(Math, (0, _toConsumableArray2["default"])(disabledDays.filter(function (day) {
        return (0, _helpers.isDateBeyondLimit)(day, value[0]);
      }))) : undefined;
      this.setState({
        currentRange: value,
        maxRangeEnd: maxRangeEnd
      });
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var currentMonth = this.state.currentMonth;
      var newMonth = (0, _helpers.addMonths)(currentMonth, 1);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var currentMonth = this.state.currentMonth;
      var newMonth = (0, _helpers.addMonths)(currentMonth, -1);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(event) {
      var currentMonth = this.state.currentMonth;
      var year = +event.target.value;
      var newMonth = new Date(currentMonth);
      newMonth.setFullYear(year);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.enableNavKeys) return;
      var keyCode = event.keyCode,
          altKey = event.altKey;
      var keyHandler = altKey ? this.keyHandlerMapAlt : this.keyHandlerMap;

      if (keyHandler[keyCode]) {
        event.preventDefault();
        event.stopPropagation();
        keyHandler[keyCode]();
      }
    }
  }, {
    key: "handleKeyUpPressed",
    value: function handleKeyUpPressed() {
      this.moveFocusedDay(-7);
    }
  }, {
    key: "handleKeyDownPressed",
    value: function handleKeyDownPressed() {
      this.moveFocusedDay(7);
    }
  }, {
    key: "handleKeyLeftPressed",
    value: function handleKeyLeftPressed() {
      this.moveFocusedDay(-1);
    }
  }, {
    key: "handleKeyRightPressed",
    value: function handleKeyRightPressed() {
      this.moveFocusedDay(1);
    }
  }, {
    key: "handleKeyHomePressed",
    value: function handleKeyHomePressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(-focusedDate.getDay());
    }
  }, {
    key: "handleKeyEndPressed",
    value: function handleKeyEndPressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(6 - focusedDate.getDay());
    }
  }, {
    key: "handleKeyPageUpPressed",
    value: function handleKeyPageUpPressed() {
      this.moveFocusedMonth(-1);
    }
  }, {
    key: "handleKeyPageDownPressed",
    value: function handleKeyPageDownPressed() {
      this.moveFocusedMonth(1);
    }
  }, {
    key: "handleKeyAltPageUpPressed",
    value: function handleKeyAltPageUpPressed() {
      this.moveFocusedMonth(-12);
    }
  }, {
    key: "handleKeyAltPageDownPressed",
    value: function handleKeyAltPageDownPressed() {
      this.moveFocusedMonth(12);
    }
  }, {
    key: "handleKeyEnterPressed",
    value: function handleKeyEnterPressed() {
      var _this$props6 = this.props,
          onChange = _this$props6.onChange,
          disabledDays = _this$props6.disabledDays;
      var focusedDate = this.state.focusedDate;
      if (disabledDays.some(function (day) {
        return (0, _helpers.isSameDay)(day, focusedDate);
      })) return;
      onChange(new Date(focusedDate));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          currentMonth = _this$state3.currentMonth,
          currentRange = _this$state3.currentRange;
      var _this$props7 = this.props,
          id = _this$props7.id,
          value = _this$props7.value,
          onChange = _this$props7.onChange,
          minDate = _this$props7.minDate,
          maxDate = _this$props7.maxDate,
          className = _this$props7.className,
          style = _this$props7.style,
          locale = _this$props7.locale;
      var formattedMonth = (0, _helpers.getFormattedMonth)(currentMonth, locale);
      var currentYear = currentMonth.getFullYear();
      var yearsRange = (0, _helpers.getYearsRange)({
        minDate: minDate,
        maxDate: maxDate,
        currentMonth: currentMonth.getMonth()
      });
      var lastYearItem = yearsRange[yearsRange.length - 1];
      var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
      var disableNextMonth = (0, _helpers.addMonths)(currentMonth, 1) > maxSelectableDate;
      var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
      var prevDate = (0, _helpers.getLastDayMonth)((0, _helpers.addMonths)(currentMonth, -1));
      var disablePreviousMonth = prevDate < minSelectableDate;
      return _react["default"].createElement("section", {
        id: id,
        className: className,
        style: style,
        "data-calendar-type": "single"
      }, _react["default"].createElement(_calendarHeader["default"], {
        variant: "single",
        monthLabelId: this.monthLabelId,
        formattedMonth: formattedMonth,
        currentYear: currentYear,
        yearsRange: yearsRange,
        disablePreviousMonth: disablePreviousMonth,
        disableNextMonth: disableNextMonth,
        onPrevMonthClick: this.previousMonth,
        onNextMonthClick: this.nextMonth,
        onYearChange: this.handleYearChange
      }), _react["default"].createElement(_table["default"], {
        role: "grid",
        "aria-labelledby": this.monthLabelId
      }, _react["default"].createElement(_daysOfWeek["default"], {
        locale: locale
      }), _react["default"].createElement(_context.Provider, {
        value: this.getContext()
      }, _react["default"].createElement(_month["default"], {
        value: value,
        firstDayMonth: currentMonth,
        minDate: minDate,
        maxDate: maxDate,
        onChange: onChange,
        selectedRange: currentRange
      }))));
    }
  }]);
  return SingleCalendar;
}(_react.Component);

SingleCalendar.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  selectionType: _propTypes["default"].oneOf(['single', 'range']),
  selectedRange: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string])),
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]))
};
SingleCalendar.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  id: undefined,
  locale: undefined,
  selectionType: 'single',
  selectedRange: undefined,
  disabledDays: []
};
var _default = SingleCalendar;
exports["default"] = _default;