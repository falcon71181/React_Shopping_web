import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import AmPmSelect from './ampmSelect';
import StyledUpArrow from './styled/upArrow';
import StyledDownArrow from './styled/downArrow';
import RenderIf from '../RenderIf';
import normalizeHour from './helpers/normalizeHour';
import normalizeMinutes from './helpers/normalizeMinutes';
import getNextHour from './helpers/getNextHour';
import getPrevHour from './helpers/getPrevHour';
import getNextMinute from './helpers/getNextMinute';
import getPrevMinute from './helpers/getPrevMinute';
import getNextAmPmValue from './helpers/getNextAmPmValue';
import get24HourTime from './helpers/get24HourTime';
import getSingleNewTypedValue from './helpers/getSingleNewTypedValue';
import isNumber from './helpers/isNumber';
import getHour from './helpers/getHour';
import getMinutes from './helpers/getMinutes';
import getAmPm from './helpers/getAmPm';
import getDefaultAmPm from './helpers/getDefaultAmPm';
import { LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, DELETE_KEY, ENTER_KEY } from '../../libs/constants';
import StyledSelectContent from './styled/selectContent';
import StyledDots from './styled/dots';
import StyledSelectValue from './styled/selectValue';
import StyledVerticalButtonsContainer from './styled/verticalButtonsContainer';
import StyledFooter from './styled/footer';
import StyledButton from './styled/button';
import OutsideClick from '../../libs/outsideClick';

function preventDefault(event) {
  event.preventDefault();
}

var TimeSelect = function (_Component) {
  _inherits(TimeSelect, _Component);

  var _super = _createSuper(TimeSelect);

  function TimeSelect(props) {
    var _this;

    _classCallCheck(this, TimeSelect);

    _this = _super.call(this, props);
    _this.state = {
      hour: getHour(props.value),
      minutes: getMinutes(props.value),
      ampm: getAmPm(props.value),
      inputFocusedIndex: 0
    };
    _this.containerRef = React.createRef();
    _this.hourInputRef = React.createRef();
    _this.minutesInputRef = React.createRef();
    _this.amPmInputRef = React.createRef();
    _this.inputsMap = {
      0: _this.hourInputRef,
      1: _this.minutesInputRef,
      2: _this.amPmInputRef
    };
    _this.hasPropValue = !!props.value;
    _this.handleChangeHour = _this.handleChangeHour.bind(_assertThisInitialized(_this));
    _this.handleFocusHour = _this.handleFocusHour.bind(_assertThisInitialized(_this));
    _this.handleBlurHour = _this.handleBlurHour.bind(_assertThisInitialized(_this));
    _this.handleChangeMinutes = _this.handleChangeMinutes.bind(_assertThisInitialized(_this));
    _this.handleFocusMinutes = _this.handleFocusMinutes.bind(_assertThisInitialized(_this));
    _this.handleClickAmPm = _this.handleClickAmPm.bind(_assertThisInitialized(_this));
    _this.handleAmPmChange = _this.handleAmPmChange.bind(_assertThisInitialized(_this));
    _this.hanldeFocusAmPm = _this.hanldeFocusAmPm.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.incrementHandler = _this.incrementHandler.bind(_assertThisInitialized(_this));
    _this.decrementHandler = _this.decrementHandler.bind(_assertThisInitialized(_this));
    _this.handleButtonsFocus = _this.handleButtonsFocus.bind(_assertThisInitialized(_this));
    _this.handleChangeTime = _this.handleChangeTime.bind(_assertThisInitialized(_this));
    _this.handleButtonsDown = _this.handleButtonsDown.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.outsideClick = new OutsideClick();
    return _this;
  }

  _createClass(TimeSelect, [{
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
      var nextAmPmValue = getNextAmPmValue(ampm);
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

      if (isNumber(value)) {
        this.value = value;

        if (Number(value) > 23 || this.isUpOrDownKeyPressed || this.hasPropValue) {
          var newTypedValue = getSingleNewTypedValue(hour, value);
          normalizedValue = normalizeHour(newTypedValue, hour24);
          this.setState({
            hour: normalizedValue
          });
        } else {
          normalizedValue = normalizeHour(value, hour24);
          this.defaultAmPM = getDefaultAmPm(value);
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

      if (isNumber(value)) {
        if (Number(value) > 60 || this.isUpOrDownKeyPressed) {
          var newTypedValue = getSingleNewTypedValue(minutes, value);
          normalizedValue = normalizeMinutes(newTypedValue);
          this.setState({
            minutes: normalizedValue
          });
        } else {
          normalizedValue = normalizeMinutes(value);
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

      if (keyCode === RIGHT_KEY) {
        this.handleRightKeyPressed();
      }

      if (keyCode === LEFT_KEY) {
        this.handleLeftKeyPressed();
      }

      if (keyCode === UP_KEY) {
        this.incrementHandler();
      }

      if (keyCode === DOWN_KEY) {
        this.decrementHandler();
      }

      if (keyCode === DELETE_KEY) {
        this.resetState();
      }

      if (keyCode === ENTER_KEY) {
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
        hour: getHour(value),
        minutes: getMinutes(value),
        ampm: getAmPm(value)
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
        hour: normalizeHour(getNextHour(hourValue, hour24), hour24)
      });
    }
  }, {
    key: "decrementHour",
    value: function decrementHour() {
      var hour = this.state.hour;
      var hour24 = this.props.hour24;
      var hourValue = hour || this.prevHour;
      this.setState({
        hour: normalizeHour(getPrevHour(hourValue, hour24), hour24)
      });
    }
  }, {
    key: "incrementMinutes",
    value: function incrementMinutes() {
      var minutes = this.state.minutes;
      var minutesValue = minutes || this.prevMinutes;
      this.setState({
        minutes: normalizeMinutes(getNextMinute(minutesValue))
      });
    }
  }, {
    key: "decrementMinutes",
    value: function decrementMinutes() {
      var minutes = this.state.minutes;
      var minutesValue = minutes || this.prevMinutes;
      this.setState({
        minutes: normalizeMinutes(getPrevMinute(minutesValue))
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
      var time = get24HourTime({
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
      return React.createElement("article", {
        className: className
      }, React.createElement(StyledSelectContent, {
        ref: this.containerRef,
        role: "presentation",
        onKeyDown: this.handleKeyDown
      }, React.createElement(StyledSelectValue, {
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
      }), React.createElement(StyledDots, null, ":"), React.createElement(StyledSelectValue, {
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
      }), React.createElement(RenderIf, {
        isTrue: !hour24
      }, React.createElement(AmPmSelect, {
        tabIndex: "-1",
        value: ampm,
        defaultValue: this.defaultAmPM,
        onFocus: this.hanldeFocusAmPm,
        onClick: this.handleClickAmPm,
        onChange: this.handleAmPmChange,
        isFocused: inputFocusedIndex === 2,
        ref: this.amPmInputRef
      })), React.createElement(StyledVerticalButtonsContainer, null, React.createElement(ButtonIcon, {
        id: "time-picker_up-button",
        tabIndex: "-1",
        variant: "border-filled",
        icon: React.createElement(StyledUpArrow, null),
        size: "small",
        onMouseDown: this.handleButtonsDown,
        onClick: this.incrementHandler,
        onFocus: this.handleButtonsFocus,
        assistiveText: "Next value"
      }), React.createElement(ButtonIcon, {
        id: "time-picker_down-button",
        tabIndex: "-1",
        variant: "border-filled",
        icon: React.createElement(StyledDownArrow, null),
        size: "small",
        onMouseDown: this.handleButtonsDown,
        onClick: this.decrementHandler,
        onFocus: this.handleButtonsFocus,
        assistiveText: "Previous value"
      }))), React.createElement(StyledFooter, null, React.createElement(StyledButton, {
        id: "time-picker_cancel-button",
        variant: "base",
        label: cancelLabel,
        onClick: onCloseModal
      }), React.createElement(StyledButton, {
        id: "time-picker_ok-button",
        variant: "brand",
        label: okLabel,
        onClick: this.handleChangeTime
      })));
    }
  }]);

  return TimeSelect;
}(Component);

export { TimeSelect as default };
TimeSelect.propTypes = {
  onCloseModal: PropTypes.func,
  hour24: PropTypes.bool,
  cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string
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