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

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _resizeBar = _interopRequireDefault(require("./styled/resizeBar"));

var _input = _interopRequireDefault(require("./styled/input"));

var _guideline = _interopRequireDefault(require("./styled/guideline"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ResizeBar = function (_Component) {
  (0, _inherits2["default"])(ResizeBar, _Component);

  var _super = _createSuper(ResizeBar);

  function ResizeBar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ResizeBar);
    _this = _super.call(this, props);
    _this.state = {
      resizeBarStyle: {
        willChange: 'transform'
      }
    };
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ResizeBar, [{
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      event.preventDefault();
      var onResize = this.props.onResize;
      document.removeEventListener('mouseup', this.handleMouseUp, {
        capture: true
      });
      document.removeEventListener('mousemove', this.handleMouseMove, {
        capture: true
      });
      onResize(this.newXPosition);
      this.setState({
        resizeBarStyle: {
          willChange: 'transform'
        }
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      event.preventDefault();
      var _this$props = this.props,
          minColumnWidth = _this$props.minColumnWidth,
          maxColumnWidth = _this$props.maxColumnWidth,
          headerWidth = _this$props.headerWidth;
      this.newXPosition = event.clientX - this.startXPosition;
      var minXPosition = minColumnWidth - headerWidth;
      var maxXPosition = maxColumnWidth - headerWidth;

      if (this.newXPosition < minXPosition) {
        this.newXPosition = minXPosition;
      } else if (this.newXPosition > maxXPosition) {
        this.newXPosition = maxXPosition;
      }

      this.setState({
        resizeBarStyle: {
          transform: "translateX(".concat(this.newXPosition, "px)"),
          willChange: 'transform'
        }
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      event.preventDefault();
      this.newXPosition = 0;
      this.startXPosition = event.clientX;
      document.addEventListener('mousemove', this.handleMouseMove, {
        capture: true
      });
      document.addEventListener('mouseup', this.handleMouseUp, {
        capture: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          minColumnWidth = _this$props2.minColumnWidth,
          maxColumnWidth = _this$props2.maxColumnWidth,
          isResizable = _this$props2.isResizable,
          ariaLabel = _this$props2.ariaLabel;
      var resizeBarStyle = this.state.resizeBarStyle;
      return _react["default"].createElement(_RenderIf["default"], {
        isTrue: isResizable
      }, _react["default"].createElement(_resizeBar["default"], {
        className: "rainbow-table_header-resize-bar",
        role: "presentation",
        draggable: true,
        onMouseDown: this.handleMouseDown,
        style: resizeBarStyle
      }, _react["default"].createElement(_input["default"], {
        as: "input",
        type: "range",
        min: minColumnWidth,
        max: maxColumnWidth,
        "aria-label": ariaLabel,
        tabIndex: -1
      }), _react["default"].createElement(_guideline["default"], {
        role: "presentation",
        draggable: true,
        onMouseDown: this.handleMouseDown
      })));
    }
  }]);
  return ResizeBar;
}(_react.Component);

exports["default"] = ResizeBar;
ResizeBar.propTypes = {
  minColumnWidth: _propTypes["default"].number,
  maxColumnWidth: _propTypes["default"].number,
  isResizable: _propTypes["default"].bool.isRequired,
  ariaLabel: _propTypes["default"].string,
  onResize: _propTypes["default"].func,
  headerWidth: _propTypes["default"].number.isRequired
};
ResizeBar.defaultProps = {
  minColumnWidth: undefined,
  maxColumnWidth: undefined,
  ariaLabel: undefined,
  onResize: function onResize() {}
};