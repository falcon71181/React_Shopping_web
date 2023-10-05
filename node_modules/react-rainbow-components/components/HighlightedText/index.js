"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HighlightedText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hitText = _interopRequireDefault(require("./hitText"));

var _highlighContainer = _interopRequireDefault(require("./highlighContainer"));

var _index = require("./styled/index");

function HighlightedText(props) {
  var style = props.style,
      className = props.className,
      parts = props.parts,
      hitComponent = props.hitComponent,
      textComponent = props.textComponent,
      isInline = props.isInline;
  var finalHitContainer = hitComponent || _index.DefaultHitContainer;
  var finalTextContainer = textComponent || _index.DefaultTextContainer;
  return _react["default"].createElement(_highlighContainer["default"], {
    className: className,
    style: style,
    isInline: isInline
  }, _react["default"].createElement(_hitText["default"], {
    parts: parts,
    hitComponent: finalHitContainer,
    textComponent: finalTextContainer
  }));
}

HighlightedText.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  parts: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    value: _propTypes["default"].string,
    type: _propTypes["default"].string
  })),
  hitComponent: _propTypes["default"].elementType,
  textComponent: _propTypes["default"].elementType,
  isInline: _propTypes["default"].bool
};
HighlightedText.defaultProps = {
  className: undefined,
  style: undefined,
  parts: undefined,
  hitComponent: undefined,
  textComponent: undefined,
  isInline: false
};