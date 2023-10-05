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

var _context = require("./context");

var _container = _interopRequireDefault(require("./styled/container"));

var _indicatorList = _interopRequireDefault(require("./styled/indicatorList"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProgressIndicator = function (_Component) {
  (0, _inherits2["default"])(ProgressIndicator, _Component);

  var _super = _createSuper(ProgressIndicator);

  function ProgressIndicator(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProgressIndicator);
    _this = _super.call(this, props);
    _this.stepChildren = [];
    _this.numbersMap = {};
    _this.registerStep = _this.registerStep.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setChildrenState = _this.setChildrenState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ProgressIndicator, [{
    key: "setChildrenState",
    value: function setChildrenState(step) {
      var currentStepName = this.props.currentStepName;
      var activeStepIndex = this.stepChildren.findIndex(function (item) {
        return item.name === currentStepName;
      });
      var currentChildIndex = this.stepChildren.findIndex(function (item) {
        return item.name === step.name;
      });

      if (currentChildIndex === activeStepIndex) {
        step.onSetStepState('Active');
      } else if (activeStepIndex === -1 || currentChildIndex < activeStepIndex) {
        step.onSetStepState('Completed');
      } else if (currentChildIndex > activeStepIndex) {
        step.onSetStepState('Inactive');
      }
    }
  }, {
    key: "registerStep",
    value: function registerStep(step) {
      var newChildrenRefs = this.stepChildren.concat([step]);
      this.stepChildren = newChildrenRefs;
      var name = step.name;
      this.numbersMap[name] = newChildrenRefs.length;
      this.setChildrenState(step);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          variant = _this$props.variant,
          children = _this$props.children,
          currentStepName = _this$props.currentStepName,
          onClick = _this$props.onClick;
      var context = {
        currentStepName: currentStepName,
        privateRegisterStep: this.registerStep,
        privateOnClick: onClick,
        setChildrenState: this.setChildrenState,
        numbersMap: this.numbersMap,
        variant: variant
      };
      return _react["default"].createElement(_container["default"], {
        className: className,
        style: style
      }, _react["default"].createElement(_indicatorList["default"], null, _react["default"].createElement(_context.Provider, {
        value: context
      }, children)));
    }
  }]);
  return ProgressIndicator;
}(_react.Component);

exports["default"] = ProgressIndicator;
ProgressIndicator.propTypes = {
  currentStepName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'numeric']),
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};
ProgressIndicator.defaultProps = {
  currentStepName: '',
  className: undefined,
  style: undefined,
  variant: 'default',
  onClick: function onClick() {},
  children: null
};