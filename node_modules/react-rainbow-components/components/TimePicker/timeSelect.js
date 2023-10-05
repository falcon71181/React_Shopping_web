"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon"));

var _ampmSelect = _interopRequireDefault(require("./ampmSelect"));

var _upArrow = _interopRequireDefault(require("./styled/upArrow"));

var _downArrow = _interopRequireDefault(require("./styled/downArrow"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _normalizeHour = _interopRequireDefault(require("./helpers/normalizeHour"));

var _normalizeMinutes = _interopRequireDefault(require("./helpers/normalizeMinutes"));

var _getNextHour = _interopRequireDefault(require("./helpers/getNextHour"));

var _getPrevHour = _interopRequireDefault(require("./helpers/getPrevHour"));

var _getNextMinute = _interopRequireDefault(require("./helpers/getNextMinute"));

var _getPrevMinute = _interopRequireDefault(require("./helpers/getPrevMinute"));

var _getNextAmPmValue = _interopRequireDefault(require("./helpers/getNextAmPmValue"));

var _get24HourTime = _interopRequireDefault(require("./helpers/get24HourTime"));

var _getSingleNewTypedValue = _interopRequireDefault(require("./helpers/getSingleNewTypedValue"));

var _isNumber = _interopRequireDefault(require("./helpers/isNumber"));

var _getHour = _interopRequireDefault(require("./helpers/getHour"));

var _getMinutes = _interopRequireDefault(require("./helpers/getMinutes"));

var _getAmPm = _interopRequireDefault(require("./helpers/getAmPm"));

var _getDefaultAmPm = _interopRequireDefault(require("./helpers/getDefaultAmPm"));

var _constants = require("../../libs/constants");

var _selectContent = _interopRequireDefault(require("./styled/selectContent"));

var _dots = _interopRequireDefault(require("./styled/dots"));

var _selectValue = _interopRequireDefault(require("./styled/selectValue"));

var _verticalButtonsContainer = _interopRequireDefault(require("./styled/verticalButtonsContainer"));

var _footer = _interopRequireDefault(require("./styled/footer"));

var _button = _interopRequireDefault(require("./styled/button"));

var _outsideClick = _interopRequireDefault(require("../../libs/outsideClick"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function preventDefault(event) {
  event.preventDefault();
}

var TimeSelect = function (_Component) {
  (0, _inherits2["default"])(TimeSelect, _Component);

  var _super = _createSuper(TimeSelect);

  function TimeSelect(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TimeSelect);
    _this = _super.call(this, props);
    _this.state = {
      hour: (0, _getHour["default"])(props.value),
      minutes: (0, _getMinutes["default"])(props.value),
      ampm: (0, _getAmPm["default"])(props.value),
      inputFocusedIndex: 0
    };
    _this.containerRef = _react["default"].createRef();
    _this.hourInputRef = _react["default"].createRef();
    _this.minutesInputRef = _react["default"].createRef();
    _this.amPmInputRef = _react["default"].createRef();
    _this.inputsMap = {
      0: _this.hourInputRef,
      1: _this.minutesInputRef,
      2: _this.amPmInputRef
    };
    _this.hasPropValue = !!props.value;
    _this.handleChangeHour = _this.handleChangeHour.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocusHour = _this.handleFocusHour.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlurHour = _this.handleBlurHour.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleChangeMinutes = _this.handleChangeMinutes.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocusMinutes = _this.handleFocusMinutes.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClickAmPm = _this.handleClickAmPm.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleAmPmChange = _this.handleAmPmChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hanldeFocusAmPm = _this.hanldeFocusAmPm.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.incrementHandler = _this.incrementHandler.bind((0, _assertThisInitialized2["default"])(_this));
    _this.decrementHandler = _this.decrementHandler.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleButtonsFocus = _this.handleButtonsFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleChangeTime = _this.handleChangeTime.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleButtonsDown = _this.handleButtonsDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind((0, _assertThisInitialized2["default"])(_this));
    _this.outsideClick = new _outsideClick["default"]();
    return _this;
  }

  (0, _createClass2["default"])(TimeSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.outsideClick.startListening(this.containerRef.current, this.handleClickOutside);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevValue = prevProps.value;
      var value = this.props.value;

      if (prevValue !== value) {
        this.updateTime();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.outsideClick.stopListening();
    }
  }, {
    key: "setNextAmPmValue",
    value: function setNextAmPmValue() {
      var ampm = this.state.ampm;
      var nextAmPmValue = (0, _getNextAmPmValue["default"])(ampm);
      this.setState({
        ampm: nextAmPmValue
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      if (inputFocusedIndex === -1) return;
      this.setState({
        inputFocusedIndex: -1
      });
    }
  }, {
    key: "handleChangeHour",
    value: function handleChangeHour(event) {
      var hour = this.state.hour;
      var hour24 = this.props.hour24;
      var value = event.target.value;
      var normalizedValue;

      if ((0, _isNumber["default"])(value)) {
        this.value = value;

        if (Number(value) > 23 || this.isUpOrDownKeyPressed || this.hasPropValue) {
          var newTypedValue = (0, _getSingleNewTypedValue["default"])(hour, value);
          normalizedValue = (0, _normalizeHour["default"])(newTypedValue, hour24);
          this.setState({
            hour: normalizedValue
          });
        } else {
          normalizedValue = (0, _normalizeHour["default"])(value, hour24);
          this.defaultAmPM = (0, _getDefaultAmPm["default"])(value);
          this.setState({
            hour: normalizedValue
          });
        }

        var shouldNotFocusNextInput = !hour24 ? Number(normalizedValue) < 2 && (!hour || this.isUpOrDownKeyPressed || this.hasPropValue) : Number(normalizedValue) < 3 && (!hour || this.isUpOrDownKeyPressed || this.hasPropValue);

        if (shouldNotFocusNextInput) {
          this.isUpOrDownKeyPressed = false;
          this.hasPropValue = false;
          return;
        }

        this.isMinutesInputFocused = true;
        this.minutesInputRef.current.focus();
      }
    }
  }, {
    key: "handleFocusHour",
    value: function handleFocusHour() {
      var hour = this.state.hour;
      this.prevHour = hour || this.prevHour;
      this.setState({
        inputFocusedIndex: 0,
        hour: ''
      });
    }
  }, {
    key: "handleBlurHour",
    value: function handleBlurHour() {
      var hour = this.state.hour;
      var hour24 = this.props.hour24;

      if (this.isUpOrDownButtonPressed) {
        this.isUpOrDownButtonPressed = false;
        return;
      }

      if (this.isMinutesInputFocused) {
        this.isMinutesInputFocused = false;
        return;
      }

      if (hour === '00' && this.value >= '0' && !hour24) {
        this.setState({
          hour: '12'
        });
      }
    }
  }, {
    key: "handleChangeMinutes",
    value: function handleChangeMinutes(event) {
      var minutes = this.state.minutes;
      var value = event.target.value;
      var hour24 = this.props.hour24;
      var normalizedValue;

      if ((0, _isNumber["default"])(value)) {
        if (Number(value) > 60 || this.isUpOrDownKeyPressed) {
          var newTypedValue = (0, _getSingleNewTypedValue["default"])(minutes, value);
          normalizedValue = (0, _normalizeMinutes["default"])(newTypedValue);
          this.setState({
            minutes: normalizedValue
          });
        } else {
          normalizedValue = (0, _normalizeMinutes["default"])(value);
          this.setState({
            minutes: normalizedValue
          });
        }

        var shouldNotFocusNextInput = Number(normalizedValue) < 6 && (!minutes || this.isUpOrDownKeyPressed);

        if (shouldNotFocusNextInput) {
          this.isUpOrDownKeyPressed = false;
          return;
        }

        if (!hour24) this.amPmInputRef.current.focus();
      }
    }
  }, {
    key: "handleFocusMinutes",
    value: function handleFocusMinutes() {
      var minutes = this.state.minutes;
      this.prevMinutes = minutes || this.prevMinutes;
      this.setState({
        inputFocusedIndex: 1,
        minutes: ''
      });
    }
  }, {
    key: "handleAmPmChange",
    value: function handleAmPmChange(value) {
      this.setState({
        ampm: value
      });
    }
  }, {
    key: "handleClickAmPm",
    value: function handleClickAmPm() {
      this.setState({
        inputFocusedIndex: -1
      });
    }
  }, {
    key: "hanldeFocusAmPm",
    value: function hanldeFocusAmPm() {
      this.setState({
        inputFocusedIndex: 2
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === _constants.RIGHT_KEY) {
        this.handleRightKeyPressed();
      }

      if (keyCode === _constants.LEFT_KEY) {
        this.handleLeftKeyPressed();
      }

      if (keyCode === _constants.UP_KEY) {
        this.incrementHandler();
      }

      if (keyCode === _constants.DOWN_KEY) {
        this.decrementHandler();
      }

      if (keyCode === _constants.DELETE_KEY) {
        this.resetState();
      }

      if (keyCode === _constants.ENTER_KEY) {
        this.handleChangeTime(event);
      }
    }
  }, {
    key: "handleRightKeyPressed",
    value: function handleRightKeyPressed() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      var nextInputIndex = inputFocusedIndex + 1;
      var nextInputToFocus = this.inputsMap[nextInputIndex];

      if (nextInputToFocus && nextInputToFocus.current != null) {
        this.setState({
          inputFocusedIndex: inputFocusedIndex + 1
        });
        nextInputToFocus.current.focus();
      }
    }
  }, {
    key: "handleLeftKeyPressed",
    value: function handleLeftKeyPressed() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      var prevInputIndex = inputFocusedIndex - 1;
      var prevInputToFocus = this.inputsMap[prevInputIndex];

      if (prevInputToFocus) {
        this.setState({
          inputFocusedIndex: inputFocusedIndex - 1
        });
        prevInputToFocus.current.focus();
      }
    }
  }, {
    key: "incrementHandler",
    value: function incrementHandler() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      this.isUpOrDownKeyPressed = true;

      if (inputFocusedIndex === 0) {
        this.incrementHour();
      }

      if (inputFocusedIndex === 1) {
        this.incrementMinutes();
      }

      if (inputFocusedIndex === 2) {
        this.setNextAmPmValue();
      }
    }
  }, {
    key: "decrementHandler",
    value: function decrementHandler() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      this.isUpOrDownKeyPressed = true;

      if (inputFocusedIndex === 0) {
        this.decrementHour();
      }

      if (inputFocusedIndex === 1) {
        this.decrementMinutes();
      }

      if (inputFocusedIndex === 2) {
        this.setNextAmPmValue();
      }
    }
  }, {
    key: "handleButtonsDown",
    value: function handleButtonsDown() {
      this.isUpOrDownButtonPressed = true;
    }
  }, {
    key: "handleButtonsFocus",
    value: function handleButtonsFocus() {
      var inputFocusedIndex = this.state.inputFocusedIndex;
      var currentInputFocused = this.inputsMap[inputFocusedIndex];

      if (currentInputFocused) {
        currentInputFocused.current.focus();
      }
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var inputFocusedIndex = this.state.inputFocusedIndex;

      if (inputFocusedIndex === 0) {
        this.setState({
          hour: ''
        });
        this.prevHour = '';
      }

      if (inputFocusedIndex === 1) {
        this.setState({
          minutes: ''
        });
        this.prevMinutes = '';
      }
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      var value = this.props.value;
      this.setState({
        hour: (0, _getHour["default"])(value),
        minutes: (0, _getMinutes["default"])(value),
        ampm: (0, _getAmPm["default"])(value)
      });
    }
  }, {
    key: "focusHourInput",
    value: function focusHourInput() {
      this.hourInputRef.current.focus();
      this.setState({
        inputFocusedIndex: 0
      });
    }
  }, {
    key: "incrementHour",
    value: function incrementHour() {
      var hour = this.state.hour;
      var hour24 = this.props.hour24;
      var hourValue = hour || this.prevHour;
      this.setState({
        hour: (0, _normalizeHour["default"])((0, _getNextHour["default"])(hourValue, hour24), hour24)
      });
    }
  }, {
    key: "decrementHour",
    value: function decrementHour() {
      var hour = this.state.hour;
      var hour24 = this.props.hour24;
      var hourValue = hour || this.prevHour;
      this.setState({
        hour: (0, _normalizeHour["default"])((0, _getPrevHour["default"])(hourValue, hour24), hour24)
      });
    }
  }, {
    key: "incrementMinutes",
    value: function incrementMinutes() {
      var minutes = this.state.minutes;
      var minutesValue = minutes || this.prevMinutes;
      this.setState({
        minutes: (0, _normalizeMinutes["default"])((0, _getNextMinute["default"])(minutesValue))
      });
    }
  }, {
    key: "decrementMinutes",
    value: function decrementMinutes() {
      var minutes = this.state.minutes;
      var minutesValue = minutes || this.prevMinutes;
      this.setState({
        minutes: (0, _normalizeMinutes["default"])((0, _getPrevMinute["default"])(minutesValue))
      });
    }
  }, {
    key: "handleChangeTime",
    value: function handleChangeTime(event) {
      event.preventDefault();
      event.stopPropagation();
      var _this$state = this.state,
          hour = _this$state.hour,
          minutes = _this$state.minutes,
          ampm = _this$state.ampm;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onCloseModal = _this$props.onCloseModal,
          hour24 = _this$props.hour24;
      var currentHour = hour || this.prevHour;
      var currentMinutes = minutes || this.prevMinutes;
      var time = (0, _get24HourTime["default"])({
        hour: currentHour,
        minutes: currentMinutes,
        ampm: ampm
      });

      if (currentHour && currentMinutes && ampm && !hour24 || currentHour && currentMinutes && hour24) {
        onChange(time);
      }

      onCloseModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          hour = _this$state2.hour,
          minutes = _this$state2.minutes,
          ampm = _this$state2.ampm,
          inputFocusedIndex = _this$state2.inputFocusedIndex;
      var _this$props2 = this.props,
          onCloseModal = _this$props2.onCloseModal,
          cancelLabel = _this$props2.cancelLabel,
          okLabel = _this$props2.okLabel,
          hour24 = _this$props2.hour24,
          className = _this$props2.className;
      var hourPlaceholder = this.prevHour || '--';
      var minutesPlaceholder = this.prevMinutes || '--';
      return _react["default"].createElement("article", {
        className: className
      }, _react["default"].createElement(_selectContent["default"], {
        ref: this.containerRef,
        role: "presentation",
        onKeyDown: this.handleKeyDown
      }, _react["default"].createElement(_selectValue["default"], {
        "aria-label": "hour",
        onDrop: preventDefault,
        onPaste: preventDefault,
        "data-id": "hour",
        type: "text",
        value: hour,
        placeholder: hourPlaceholder,
        onChange: this.handleChangeHour,
        onFocus: this.handleFocusHour,
        onBlur: this.handleBlurHour,
        inputMode: "numeric",
        isFocused: inputFocusedIndex === 0,
        pattern: "\\d*",
        ref: this.hourInputRef
      }), _react["default"].createElement(_dots["default"], null, ":"), _react["default"].createElement(_selectValue["default"], {
        "aria-label": "minutes",
        onDrop: preventDefault,
        onPaste: preventDefault,
        "data-id": "minutes",
        tabIndex: "-1",
        type: "text",
        value: minutes,
        placeholder: minutesPlaceholder,
        onChange: this.handleChangeMinutes,
        onFocus: this.handleFocusMinutes,
        isFocused: inputFocusedIndex === 1,
        inputMode: "numeric",
        pattern: "\\d*",
        ref: this.minutesInputRef
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: !hour24
      }, _react["default"].createElement(_ampmSelect["default"], {
        tabIndex: "-1",
        value: ampm,
        defaultValue: this.defaultAmPM,
        onFocus: this.hanldeFocusAmPm,
        onClick: this.handleClickAmPm,
        onChange: this.handleAmPmChange,
        isFocused: inputFocusedIndex === 2,
        ref: this.amPmInputRef
      })), _react["default"].createElement(_verticalButtonsContainer["default"], null, _react["default"].createElement(_ButtonIcon["default"], {
        id: "time-picker_up-button",
        tabIndex: "-1",
        variant: "border-filled",
        icon: _react["default"].createElement(_upArrow["default"], null),
        size: "small",
        onMouseDown: this.handleButtonsDown,
        onClick: this.incrementHandler,
        onFocus: this.handleButtonsFocus,
        assistiveText: "Next value"
      }), _react["default"].createElement(_ButtonIcon["default"], {
        id: "time-picker_down-button",
        tabIndex: "-1",
        variant: "border-filled",
        icon: _react["default"].createElement(_downArrow["default"], null),
        size: "small",
        onMouseDown: this.handleButtonsDown,
        onClick: this.decrementHandler,
        onFocus: this.handleButtonsFocus,
        assistiveText: "Previous value"
      }))), _react["default"].createElement(_footer["default"], null, _react["default"].createElement(_button["default"], {
        id: "time-picker_cancel-button",
        variant: "base",
        label: cancelLabel,
        onClick: onCloseModal
      }), _react["default"].createElement(_button["default"], {
        id: "time-picker_ok-button",
        variant: "brand",
        label: okLabel,
        onClick: this.handleChangeTime
      })));
    }
  }]);
  return TimeSelect;
}(_react.Component);

exports["default"] = TimeSelect;
TimeSelect.propTypes = {
  onCloseModal: _propTypes["default"].func,
  hour24: _propTypes["default"].bool,
  cancelLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  okLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  className: _propTypes["default"].string
};
TimeSelect.defaultProps = {
  onCloseModal: function onCloseModal() {},
  hour24: false,
  cancelLabel: 'Cancel',
  okLabel: 'OK',
  onChange: function onChange() {},
  value: undefined,
  className: undefined
};