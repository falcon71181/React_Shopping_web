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
import RenderIf from '../../RenderIf';
import StyledResizeBar from './styled/resizeBar';
import StyledInput from './styled/input';
import StyledGuideline from './styled/guideline';

var ResizeBar = function (_Component) {
  _inherits(ResizeBar, _Component);

  var _super = _createSuper(ResizeBar);

  function ResizeBar(props) {
    var _this;

    _classCallCheck(this, ResizeBar);

    _this = _super.call(this, props);
    _this.state = {
      resizeBarStyle: {
        willChange: 'transform'
      }
    };
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResizeBar, [{
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      event.preventDefault();
      var onResize = this.props.onResize;
      document.removeEventListener('mouseup', this.handleMouseUp, {
        capture: true
      });
      document.removeEventListener('mousemove', this.handleMouseMove, {
        capture: true
      });
      onResize(this.newXPosition);
      this.setState({
        resizeBarStyle: {
          willChange: 'transform'
        }
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      event.preventDefault();
      var _this$props = this.props,
          minColumnWidth = _this$props.minColumnWidth,
          maxColumnWidth = _this$props.maxColumnWidth,
          headerWidth = _this$props.headerWidth;
      this.newXPosition = event.clientX - this.startXPosition;
      var minXPosition = minColumnWidth - headerWidth;
      var maxXPosition = maxColumnWidth - headerWidth;

      if (this.newXPosition < minXPosition) {
        this.newXPosition = minXPosition;
      } else if (this.newXPosition > maxXPosition) {
        this.newXPosition = maxXPosition;
      }

      this.setState({
        resizeBarStyle: {
          transform: "translateX(".concat(this.newXPosition, "px)"),
          willChange: 'transform'
        }
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      event.preventDefault();
      this.newXPosition = 0;
      this.startXPosition = event.clientX;
      document.addEventListener('mousemove', this.handleMouseMove, {
        capture: true
      });
      document.addEventListener('mouseup', this.handleMouseUp, {
        capture: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          minColumnWidth = _this$props2.minColumnWidth,
          maxColumnWidth = _this$props2.maxColumnWidth,
          isResizable = _this$props2.isResizable,
          ariaLabel = _this$props2.ariaLabel;
      var resizeBarStyle = this.state.resizeBarStyle;
      return React.createElement(RenderIf, {
        isTrue: isResizable
      }, React.createElement(StyledResizeBar, {
        className: "rainbow-table_header-resize-bar",
        role: "presentation",
        draggable: true,
        onMouseDown: this.handleMouseDown,
        style: resizeBarStyle
      }, React.createElement(StyledInput, {
        as: "input",
        type: "range",
        min: minColumnWidth,
        max: maxColumnWidth,
        "aria-label": ariaLabel,
        tabIndex: -1
      }), React.createElement(StyledGuideline, {
        role: "presentation",
        draggable: true,
        onMouseDown: this.handleMouseDown
      })));
    }
  }]);

  return ResizeBar;
}(Component);

export { ResizeBar as default };
ResizeBar.propTypes = {
  minColumnWidth: PropTypes.number,
  maxColumnWidth: PropTypes.number,
  isResizable: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string,
  onResize: PropTypes.func,
  headerWidth: PropTypes.number.isRequired
};
ResizeBar.defaultProps = {
  minColumnWidth: undefined,
  maxColumnWidth: undefined,
  ariaLabel: undefined,
  onResize: function onResize() {}
};