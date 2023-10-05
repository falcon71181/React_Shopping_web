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

var _normalizeInitials = _interopRequireDefault(require("./normalizeInitials"));

var _content = _interopRequireDefault(require("./styled/content"));

var _image = _interopRequireDefault(require("./styled/image"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AvatarContent = function (_Component) {
  (0, _inherits2["default"])(AvatarContent, _Component);

  var _super = _createSuper(AvatarContent);

  function AvatarContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AvatarContent);
    _this = _super.call(this, props);
    _this.state = {
      imageFailed: false
    };
    _this.handleImageError = _this.handleImageError.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AvatarContent, [{
    key: "handleImageError",
    value: function handleImageError() {
      this.setState({
        imageFailed: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          initials = _this$props.initials,
          title = _this$props.title,
          icon = _this$props.icon,
          assistiveText = _this$props.assistiveText,
          initialsVariant = _this$props.initialsVariant;
      var imageFailed = this.state.imageFailed;

      if (src && !imageFailed) {
        return _react["default"].createElement(_image["default"], {
          src: src,
          onError: this.handleImageError,
          title: title,
          alt: assistiveText
        });
      }

      if (initials) {
        return _react["default"].createElement(_content["default"], {
          as: "abbr",
          initialsVariant: initialsVariant,
          title: title
        }, (0, _normalizeInitials["default"])(initials));
      }

      if (icon) {
        return _react["default"].createElement(_content["default"], {
          initialsVariant: initialsVariant,
          title: title
        }, icon);
      }

      return _react["default"].createElement(_content["default"], {
        initialsVariant: initialsVariant,
        title: title
      });
    }
  }]);
  return AvatarContent;
}(_react.Component);

exports["default"] = AvatarContent;
AvatarContent.propTypes = {
  src: _propTypes["default"].string,
  initials: _propTypes["default"].string,
  initialsVariant: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  assistiveText: _propTypes["default"].string
};
AvatarContent.defaultProps = {
  src: undefined,
  initials: undefined,
  title: undefined,
  icon: null,
  assistiveText: undefined
};