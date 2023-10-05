"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HitText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function HitText(_ref) {
  var parts = _ref.parts,
      HitComponent = _ref.hitComponent,
      TextComponent = _ref.textComponent;
  return parts.map(function (part, index) {
    var key = "part-".concat(index);

    if (part.type === 'hit') {
      return _react["default"].createElement(HitComponent, {
        key: key
      }, part.value);
    }

    return _react["default"].createElement(TextComponent, {
      key: key
    }, part.value);
  });
}

HitText.propTypes = {
  parts: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    value: _propTypes["default"].string,
    type: _propTypes["default"].string
  })),
  hitComponent: _propTypes["default"].elementType,
  textComponent: _propTypes["default"].elementType
};
HitText.defaultProps = {
  parts: undefined,
  hitComponent: undefined,
  textComponent: undefined
};