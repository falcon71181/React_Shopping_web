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
import AssistiveText from '../AssistiveText';
import { uniqueId } from '../../libs/utils';
import StarFill from './starFill';
import StarBordered from './starBordered';
import { StyledStarContainer, StyledStarInput } from './styled';
import StarHalf from './starHalf';

var Star = function (_Component) {
  _inherits(Star, _Component);

  var _super = _createSuper(Star);

  function Star(props) {
    var _this;

    _classCallCheck(this, Star);

    _this = _super.call(this, props);
    _this.starId = uniqueId('star');
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Star, [{
    key: "getAssitiveText",
    value: function getAssitiveText() {
      var value = this.props.value;

      if (value === 1) {
        return "".concat(value, " Star");
      }

      return "".concat(value, " Stars");
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          readOnly = _this$props.readOnly,
          onChange = _this$props.onChange;
      if (readOnly) return null;
      return onChange(event);
    }
  }, {
    key: "renderStar",
    value: function renderStar() {
      var _this$props2 = this.props,
          isFilled = _this$props2.isFilled,
          isHalf = _this$props2.isHalf;

      if (isFilled) {
        return isHalf ? React.createElement(StarHalf, null) : React.createElement(StarFill, null);
      }

      return React.createElement(StarBordered, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          name = _this$props3.name,
          readOnly = _this$props3.readOnly,
          required = _this$props3.required,
          describedBy = _this$props3.describedBy;
      return React.createElement(StyledStarContainer, {
        readOnly: readOnly
      }, React.createElement(StyledStarInput, {
        type: "radio",
        id: this.starId,
        value: value,
        name: name,
        onChange: this.handleChange,
        disabled: readOnly,
        required: required,
        "aria-describedby": describedBy
      }), React.createElement("label", {
        htmlFor: this.starId
      }, this.renderStar(), React.createElement(AssistiveText, {
        text: this.getAssitiveText()
      })));
    }
  }]);

  return Star;
}(Component);

export { Star as default };
Star.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  isFilled: PropTypes.bool.isRequired,
  isHalf: PropTypes.bool,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  describedBy: PropTypes.string
};
Star.defaultProps = {
  value: 1,
  onChange: function onChange() {},
  name: undefined,
  readOnly: false,
  isHalf: false,
  required: false,
  describedBy: undefined
};