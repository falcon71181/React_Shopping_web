import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import getUrl from './getUrl';
import ReCaptchaWrapper from './wrapper';

var ReCaptcha = function (_Component) {
  _inherits(ReCaptcha, _Component);

  var _super = _createSuper(ReCaptcha);

  function ReCaptcha(props) {
    var _this;

    _classCallCheck(this, ReCaptcha);

    _this = _super.call(this, props);
    var lang = props.lang;
    _this.ReCaptchaComponent = scriptLoader(getUrl(lang))(ReCaptchaWrapper);
    return _this;
  }

  _createClass(ReCaptcha, [{
    key: "reset",
    value: function reset() {
      if (window.grecaptcha && this.optWidgetID) {
        window.grecaptcha.reset(this.optWidgetID);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var ReCaptchaComponent = this.ReCaptchaComponent;
      return React.createElement(ReCaptchaComponent, _extends({}, this.props, {
        onCreateRecaptcha: function onCreateRecaptcha(optWidgetID) {
          _this2.optWidgetID = optWidgetID;
        }
      }));
    }
  }]);

  return ReCaptcha;
}(Component);

ReCaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  lang: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['normal', 'compact']),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
ReCaptcha.defaultProps = {
  lang: undefined,
  theme: 'light',
  size: 'normal',
  tabIndex: 0,
  error: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};
export default withReduxForm(ReCaptcha);