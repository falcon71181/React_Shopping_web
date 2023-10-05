import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import StyledContainer from './styled/container';
import ErrorText from '../Input/styled/errorText';

var ReCaptchaComponent = function (_Component) {
  _inherits(ReCaptchaComponent, _Component);

  var _super = _createSuper(ReCaptchaComponent);

  function ReCaptchaComponent(props) {
    var _this;

    _classCallCheck(this, ReCaptchaComponent);

    _this = _super.call(this, props);
    _this.recaptchaID = uniqueId('recaptcha-container');
    return _this;
  }

  _createClass(ReCaptchaComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.grecaptcha.ready(function () {
        return _this2.renderReCaptcha();
      });
    }
  }, {
    key: "renderReCaptcha",
    value: function renderReCaptcha() {
      var _this$props = this.props,
          siteKey = _this$props.siteKey,
          theme = _this$props.theme,
          size = _this$props.size,
          tabIndex = _this$props.tabIndex,
          onChange = _this$props.onChange,
          onCreateRecaptcha = _this$props.onCreateRecaptcha;
      var optWidgetID = window.grecaptcha.render(this.recaptchaID, {
        sitekey: siteKey,
        theme: theme,
        size: size,
        tabIndex: tabIndex,
        callback: onChange,
        'expired-callback': onChange,
        'error-callback': onChange
      });
      onCreateRecaptcha(optWidgetID);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          error = _this$props2.error,
          style = _this$props2.style,
          className = _this$props2.className;
      return React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement("div", {
        id: this.recaptchaID
      }), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, null, error)));
    }
  }]);

  return ReCaptchaComponent;
}(Component);

export { ReCaptchaComponent as default };
ReCaptchaComponent.propTypes = {
  siteKey: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  size: PropTypes.oneOf(['normal', 'compact']).isRequired,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onChange: PropTypes.func,
  onCreateRecaptcha: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
ReCaptchaComponent.defaultProps = {
  error: undefined,
  onChange: function onChange() {},
  onCreateRecaptcha: function onCreateRecaptcha() {},
  className: undefined,
  style: undefined
};