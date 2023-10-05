"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressStep;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../ProgressIndicator/context");

var _doneIcon = _interopRequireDefault(require("./doneIcon"));

var _errorIcon = _interopRequireDefault(require("./errorIcon"));

var _step = _interopRequireDefault(require("./styled/step"));

var _stepButton = _interopRequireDefault(require("./styled/stepButton"));

var _inactiveIcon = _interopRequireDefault(require("./styled/inactiveIcon"));

var _activeIcon = _interopRequireDefault(require("./styled/activeIcon"));

var _label = _interopRequireDefault(require("./styled/label"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _stepNumberButton = _interopRequireDefault(require("./styled/stepNumberButton"));

var _InternalTooltip = _interopRequireDefault(require("../InternalTooltip"));

var _scrollController = require("../../libs/scrollController");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var iconMap = {
  Error: function Error() {
    return _react["default"].createElement(_errorIcon["default"], null);
  },
  Completed: function Completed() {
    return _react["default"].createElement(_doneIcon["default"], null);
  },
  Active: function Active() {
    return _react["default"].createElement(_activeIcon["default"], null);
  },
  Inactive: function Inactive() {
    return _react["default"].createElement(_inactiveIcon["default"], null);
  }
};

var StepItem = function (_Component) {
  (0, _inherits2["default"])(StepItem, _Component);

  var _super = _createSuper(StepItem);

  function StepItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StepItem);
    _this = _super.call(this, props);
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setStepState = _this.setStepState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showTooltip = _this.showTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hideTooltip = _this.hideTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    _this.windowScrolling = new _scrollController.WindowScrolling();
    _this.triggerRef = _react["default"].createRef();
    _this.state = {
      stepState: 'Inactive'
    };
    return _this;
  }

  (0, _createClass2["default"])(StepItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          privateRegisterStep = _this$props.privateRegisterStep,
          name = _this$props.name;
      return setTimeout(function () {
        return privateRegisterStep({
          name: name,
          onSetStepState: _this2.setStepState
        });
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevCurrentStepName = _ref.currentStepName;
      var _this$props2 = this.props,
          currentStepName = _this$props2.currentStepName,
          name = _this$props2.name;
      var setChildrenState = this.props.setChildrenState;

      if (prevCurrentStepName !== currentStepName) {
        setChildrenState({
          name: name,
          onSetStepState: this.setStepState
        });
      }
    }
  }, {
    key: "setStepState",
    value: function setStepState(stepState) {
      var hasError = this.props.hasError;

      if (hasError) {
        return this.setState({
          stepState: 'Error'
        });
      }

      return this.setState({
        stepState: stepState
      });
    }
  }, {
    key: "getAssistiveText",
    value: function getAssistiveText() {
      var label = this.props.label;
      var stepState = this.state.stepState;

      if (label && stepState !== 'Inactive') {
        return "".concat(label, " - ").concat(stepState);
      }

      if (label) {
        return label;
      }

      if (stepState) {
        return stepState;
      }

      return '';
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var stepState = this.state.stepState;

      if (iconMap[stepState]) {
        return iconMap[stepState]();
      }

      return null;
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.windowScrolling.startListening(this.hideTooltip);
      this.setState({
        isTooltipVisible: true
      });
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      var isTooltipVisible = this.state.isTooltipVisible;
      this.windowScrolling.stopListening();

      if (isTooltipVisible) {
        this.setState({
          isTooltipVisible: false
        });
      }
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      var _this$props3 = this.props,
          privateOnClick = _this$props3.privateOnClick,
          name = _this$props3.name;
      return privateOnClick(event, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          label = _this$props4.label,
          className = _this$props4.className,
          variant = _this$props4.variant,
          name = _this$props4.name,
          numbersMap = _this$props4.numbersMap,
          tooltip = _this$props4.tooltip;
      var _this$state = this.state,
          stepState = _this$state.stepState,
          isTooltipVisible = _this$state.isTooltipVisible;
      var shouldRenderNumber = variant === 'numeric' && (stepState === 'Inactive' || stepState === 'Active');
      return _react["default"].createElement(_step["default"], {
        className: className,
        onMouseEnter: this.showTooltip,
        onMouseLeave: this.hideTooltip,
        ref: this.triggerRef
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: !shouldRenderNumber
      }, _react["default"].createElement(_stepButton["default"], {
        stepState: stepState,
        icon: this.getIcon(),
        onClick: this.handleOnClick,
        assistiveText: this.getAssistiveText()
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: shouldRenderNumber
      }, _react["default"].createElement(_stepNumberButton["default"], {
        stepState: stepState,
        onClick: this.handleOnClick,
        assistiveText: this.getAssistiveText()
      }, numbersMap[name])), _react["default"].createElement(_label["default"], {
        stepState: stepState
      }, label), _react["default"].createElement(_RenderIf["default"], {
        isTrue: tooltip
      }, _react["default"].createElement(_InternalTooltip["default"], {
        triggerElementRef: function triggerElementRef() {
          return _this3.triggerRef;
        },
        isVisible: isTooltipVisible,
        preferredPosition: "top"
      }, tooltip)));
    }
  }]);
  return StepItem;
}(_react.Component);

function ProgressStep(props) {
  return _react["default"].createElement(_context.Consumer, null, function (context) {
    return _react["default"].createElement(StepItem, (0, _extends2["default"])({}, props, context));
  });
}

ProgressStep.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].node,
  hasError: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  tooltip: _propTypes["default"].string
};
ProgressStep.defaultProps = {
  name: '',
  label: '',
  hasError: false,
  className: undefined,
  style: undefined,
  tooltip: undefined
};