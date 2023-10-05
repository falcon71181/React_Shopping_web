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
import { uniqueId } from '../../libs/utils';
import AssistiveText from '../AssistiveText';
import { Provider } from './context';
import getMaxHeight from './getMaxHeight';
import Description from './description';
import RightArrow from './rightArrow';
import StyledContainer from './styled/container';
import StyledButton from './styled/button';
import StyledActionContainer from './styled/actionContainer';
import StyledActionLabel from './styled/actionLabel';
import StyledOverflow from './styled/overflow';
import StyledUl from './styled/ul';

var VerticalSectionOverflow = function (_Component) {
  _inherits(VerticalSectionOverflow, _Component);

  var _super = _createSuper(VerticalSectionOverflow);

  function VerticalSectionOverflow(props) {
    var _this;

    _classCallCheck(this, VerticalSectionOverflow);

    _this = _super.call(this, props);
    _this.searchResultsId = uniqueId('search-results');
    _this.state = {
      isExpanded: props.expanded
    };
    _this.toggleOverflow = _this.toggleOverflow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VerticalSectionOverflow, [{
    key: "toggleOverflow",
    value: function toggleOverflow(event) {
      var isExpanded = this.state.isExpanded;
      var onToggleSection = this.props.onToggleSection;

      if (typeof onToggleSection === 'function') {
        return onToggleSection(event);
      }

      return this.setState({
        isExpanded: !isExpanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          description = _this$props.description,
          style = _this$props.style,
          assistiveText = _this$props.assistiveText,
          children = _this$props.children,
          className = _this$props.className;
      var isExpanded = this.state.isExpanded;
      var sectionMaxHeight = {
        maxHeight: getMaxHeight(children, isExpanded)
      };
      return React.createElement(StyledContainer, {
        "data-id": "vertical-overflow-container",
        className: className,
        style: style,
        isExpanded: isExpanded
      }, React.createElement(StyledButton, {
        "data-id": "vertical-overflow-button",
        "aria-controls": this.searchResultsId,
        "aria-expanded": isExpanded,
        onClick: this.toggleOverflow,
        isExpanded: isExpanded,
        description: description
      }, React.createElement(StyledActionContainer, {
        as: "div"
      }, React.createElement(StyledActionLabel, null, label), React.createElement(Description, {
        isExpanded: isExpanded,
        description: description
      }), React.createElement(AssistiveText, {
        text: assistiveText
      })), React.createElement(RightArrow, {
        isExpanded: isExpanded
      })), React.createElement(StyledOverflow, {
        "data-id": "vertical-overflow",
        id: this.searchResultsId,
        style: sectionMaxHeight,
        isExpanded: isExpanded
      }, React.createElement(Provider, {
        value: isExpanded
      }, React.createElement(StyledUl, null, children))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var expanded = nextProps.expanded,
          onToggleSection = nextProps.onToggleSection;

      if (expanded !== state.isExpanded && typeof onToggleSection === 'function') {
        return {
          isExpanded: expanded
        };
      }

      return null;
    }
  }]);

  return VerticalSectionOverflow;
}(Component);

export { VerticalSectionOverflow as default };
VerticalSectionOverflow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expanded: PropTypes.bool,
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onToggleSection: PropTypes.func,
  children: PropTypes.node
};
VerticalSectionOverflow.defaultProps = {
  label: '',
  description: '',
  expanded: false,
  className: undefined,
  style: undefined,
  assistiveText: undefined,
  children: null,
  onToggleSection: undefined
};