"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StrengthBar;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function StrengthBar(props) {
  var passwordState = props.passwordState,
      passwordStateLabels = props.passwordStateLabels;
  var label = (0, _react.useMemo)(function () {
    return passwordStateLabels ? passwordStateLabels[passwordState] : undefined;
  }, [passwordState, passwordStateLabels]);
  return _react["default"].createElement(_styled.StyledStrenghtBar, null, _react["default"].createElement(_styled.StyledStateBar, {
    passwordState: passwordState
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_styled.StyledStateLabel, {
    passwordState: passwordState
  }, label)));
}

StrengthBar.propTypes = {
  passwordState: _propTypes["default"].oneOf(['weak', 'average', 'strong']),
  passwordStateLabels: _propTypes["default"].shape({
    weak: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    average: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    strong: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
  })
};
StrengthBar.defaultProps = {
  passwordState: undefined,
  passwordStateLabels: undefined
};