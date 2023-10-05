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
import RatingItems from './ratingItems';
import { uniqueId } from '../../libs/utils';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import RenderIf from '../RenderIf';
import { StyledFieldset, StyledLabel, StyledItemsContainer } from './styled';

var Rating = function (_Component) {
  _inherits(Rating, _Component);

  var _super = _createSuper(Rating);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value
    };
    _this.starGroupNameId = uniqueId('starGroup');
    _this.handleOnHover = _this.handleOnHover.bind(_assertThisInitialized(_this));
    _this.handleOnLeave = _this.handleOnLeave.bind(_assertThisInitialized(_this));
    _this.errorMessageId = uniqueId('error-message');
    return _this;
  }

  _createClass(Rating, [{
    key: "getName",
    value: function getName() {
      var name = this.props.name;

      if (name) {
        return name;
      }

      return this.starGroupNameId;
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "handleOnHover",
    value: function handleOnHover(event) {
      var readOnly = this.props.readOnly;

      if (event.target.value && !readOnly) {
        return this.setState({
          value: event.target.value
        });
      }

      return null;
    }
  }, {
    key: "handleOnLeave",
    value: function handleOnLeave() {
      var value = this.props.value;
      return this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          onChange = _this$props.onChange,
          label = _this$props.label,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          bottomHelpText = _this$props.bottomHelpText,
          error = _this$props.error;
      var value = this.state.value;
      return React.createElement(StyledFieldset, {
        onMouseOver: this.handleOnHover,
        onMouseLeave: this.handleOnLeave,
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledLabel, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        forwardedAs: "legend",
        required: required
      })), React.createElement(StyledItemsContainer, {
        labelAlignment: labelAlignment
      }, React.createElement(RatingItems, {
        onChange: onChange,
        value: value,
        name: this.getName(),
        readOnly: readOnly,
        required: required,
        describedBy: this.getErrorMessageId()
      })), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(HelpText, {
        alignSelf: "center"
      }, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, {
        alignSelf: "center",
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return Rating;
}(Component);

export { Rating as default };
Rating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Rating.defaultProps = {
  value: 0,
  onChange: function onChange() {},
  name: undefined,
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  className: undefined,
  style: undefined,
  readOnly: false,
  required: false,
  bottomHelpText: undefined,
  error: undefined
};