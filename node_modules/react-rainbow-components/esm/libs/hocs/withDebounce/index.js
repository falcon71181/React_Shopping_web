import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["onChange"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import debounce from '../../debounce';
export default function withDebounce(WrappedComponent) {
  return function (_Component) {
    _inherits(_class, _Component);

    var _super = _createSuper(_class);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);
      _this.fieldRef = React.createRef();
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      _this.debouncedChange = debounce(_this.debouncedChange, props.debounceTimeout);
      return _this;
    }

    _createClass(_class, [{
      key: "handleChange",
      value: function handleChange(event) {
        event.persist();
        this.debouncedChange(event);
      }
    }, {
      key: "debouncedChange",
      value: function debouncedChange(event) {
        var onChange = this.props.onChange;
        onChange(event);
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
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onChange = _this$props.onChange,
            rest = _objectWithoutProperties(_this$props, _excluded);

        return React.createElement(WrappedComponent, _extends({}, rest, {
          onChange: this.handleChange,
          ref: this.fieldRef
        }));
      }
    }]);

    return _class;
  }(Component);
}