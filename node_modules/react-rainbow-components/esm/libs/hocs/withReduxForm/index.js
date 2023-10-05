import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["error", "input", "meta"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
export default function withReduxForm(WrappedComponent) {
  return function (_Component) {
    _inherits(_class, _Component);

    var _super = _createSuper(_class);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);
      _this.fieldRef = React.createRef();
      return _this;
    }

    _createClass(_class, [{
      key: "getErrorMessage",
      value: function getErrorMessage() {
        var _this$props = this.props,
            meta = _this$props.meta,
            error = _this$props.error;

        if (meta) {
          var touched = meta.touched,
              submitFailed = meta.submitFailed,
              metaError = meta.error;

          if ((touched || submitFailed) && metaError) {
            return metaError;
          }
        }

        return error;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.fieldRef.current.focus();
      }
    }, {
      key: "click",
      value: function click() {
        this.fieldRef.current.click();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.fieldRef.current.blur();
      }
    }, {
      key: "reset",
      value: function reset() {
        this.fieldRef.current.reset();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            error = _this$props2.error,
            input = _this$props2.input,
            meta = _this$props2.meta,
            rest = _objectWithoutProperties(_this$props2, _excluded);

        return React.createElement(WrappedComponent, _extends({}, rest, input, {
          error: this.getErrorMessage(),
          dirty: meta && meta.dirty,
          ref: this.fieldRef
        }));
      }
    }]);

    return _class;
  }(Component);
}