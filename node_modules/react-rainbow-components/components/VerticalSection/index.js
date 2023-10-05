"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../libs/utils");

var _context = require("./context");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("./styled/container"));

var _title = _interopRequireDefault(require("./styled/title"));

var _ul = _interopRequireDefault(require("./styled/ul"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var VerticalSection = function (_Component) {
  (0, _inherits2["default"])(VerticalSection, _Component);

  var _super = _createSuper(VerticalSection);

  function VerticalSection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VerticalSection);
    _this = _super.call(this, props);
    _this.entityHeaderId = (0, _utils.uniqueId)('entity-header');
    return _this;
  }

  (0, _createClass2["default"])(VerticalSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          style = _this$props.style,
          children = _this$props.children,
          className = _this$props.className;
      return _react["default"].createElement(_container["default"], {
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_title["default"], {
        id: this.entityHeaderId
      }, label)), _react["default"].createElement(_context.Provider, {
        value: this.entityHeaderId
      }, _react["default"].createElement(_ul["default"], null, children)));
    }
  }]);
  return VerticalSection;
}(_react.Component);

VerticalSection.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
};
VerticalSection.defaultProps = {
  label: null,
  className: undefined,
  style: undefined,
  children: null
};
var _default = VerticalSection;
exports["default"] = _default;