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
import normalizeInitials from './normalizeInitials';
import StyledContent from './styled/content';
import StyledImage from './styled/image';

var AvatarContent = function (_Component) {
  _inherits(AvatarContent, _Component);

  var _super = _createSuper(AvatarContent);

  function AvatarContent(props) {
    var _this;

    _classCallCheck(this, AvatarContent);

    _this = _super.call(this, props);
    _this.state = {
      imageFailed: false
    };
    _this.handleImageError = _this.handleImageError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AvatarContent, [{
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
        return React.createElement(StyledImage, {
          src: src,
          onError: this.handleImageError,
          title: title,
          alt: assistiveText
        });
      }

      if (initials) {
        return React.createElement(StyledContent, {
          as: "abbr",
          initialsVariant: initialsVariant,
          title: title
        }, normalizeInitials(initials));
      }

      if (icon) {
        return React.createElement(StyledContent, {
          initialsVariant: initialsVariant,
          title: title
        }, icon);
      }

      return React.createElement(StyledContent, {
        initialsVariant: initialsVariant,
        title: title
      });
    }
  }]);

  return AvatarContent;
}(Component);

export { AvatarContent as default };
AvatarContent.propTypes = {
  src: PropTypes.string,
  initials: PropTypes.string,
  initialsVariant: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.node,
  assistiveText: PropTypes.string
};
AvatarContent.defaultProps = {
  src: undefined,
  initials: undefined,
  title: undefined,
  icon: null,
  assistiveText: undefined
};