import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledTitle from './styled/title';
import StyledUl from './styled/ul';

var VerticalSection = function (_Component) {
  _inherits(VerticalSection, _Component);

  var _super = _createSuper(VerticalSection);

  function VerticalSection(props) {
    var _this;

    _classCallCheck(this, VerticalSection);

    _this = _super.call(this, props);
    _this.entityHeaderId = uniqueId('entity-header');
    return _this;
  }

  _createClass(VerticalSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          style = _this$props.style,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledTitle, {
        id: this.entityHeaderId
      }, label)), React.createElement(Provider, {
        value: this.entityHeaderId
      }, React.createElement(StyledUl, null, children)));
    }
  }]);

  return VerticalSection;
}(Component);

VerticalSection.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
VerticalSection.defaultProps = {
  label: null,
  className: undefined,
  style: undefined,
  children: null
};
export default VerticalSection;