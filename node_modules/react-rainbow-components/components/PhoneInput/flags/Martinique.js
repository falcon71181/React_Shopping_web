"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMartinique(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M31.863 13.913a15.928 15.928 0 00-4.55-9.227A15.929 15.929 0 0018.088.137v13.776h13.776zM13.913.137a15.928 15.928 0 00-9.227 4.55 15.93 15.93 0 00-4.549 9.226h13.776V.137zM.137 18.087a15.929 15.929 0 004.55 9.227 15.93 15.93 0 009.226 4.55V18.086H.137zM18.087 31.863a15.928 15.928 0 009.227-4.55 15.928 15.928 0 004.549-9.226H18.087v13.776z"
  })), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M21.462 10.152c0-.212.173-.385.386-.385h.826a2.372 2.372 0 002.37-2.37 2.372 2.372 0 00-2.37-2.369h-.785a1.633 1.633 0 00-.979-.311c-.79 0-1.432.513-1.432 1.145 0 .627.63 1.135 1.41 1.145l-.001.005h1.787a.386.386 0 010 .77h-.826a2.372 2.372 0 00-2.37 2.37 2.372 2.372 0 002.37 2.37h3.195v-1.984h-3.195a.386.386 0 01-.386-.386zM8.94 10.152c0-.212.173-.385.386-.385h.826a2.372 2.372 0 002.37-2.37 2.372 2.372 0 00-2.37-2.369h-.784a1.633 1.633 0 00-.98-.311c-.79 0-1.431.513-1.431 1.145 0 .627.628 1.135 1.409 1.145v.005h1.786a.386.386 0 010 .77h-.826a2.372 2.372 0 00-2.37 2.37 2.372 2.372 0 002.37 2.37h3.196v-1.984H9.326a.386.386 0 01-.386-.386zM21.462 24.914c0-.213.173-.386.386-.386h.826a2.372 2.372 0 002.37-2.37 2.372 2.372 0 00-2.37-2.369h-.785a1.633 1.633 0 00-.979-.31c-.79 0-1.432.512-1.432 1.145 0 .626.63 1.134 1.41 1.144l-.001.005h1.787a.386.386 0 010 .771h-.826a2.372 2.372 0 00-2.37 2.37 2.372 2.372 0 002.37 2.369h3.195v-1.984h-3.195a.386.386 0 01-.386-.385zM8.94 24.914c0-.213.173-.386.386-.386h.826a2.372 2.372 0 002.37-2.37 2.372 2.372 0 00-2.37-2.369h-.784a1.633 1.633 0 00-.98-.31c-.79 0-1.431.512-1.431 1.145 0 .626.628 1.134 1.409 1.144v.005h1.786a.386.386 0 010 .771h-.826a2.372 2.372 0 00-2.37 2.37 2.372 2.372 0 002.37 2.369h3.196v-1.984H9.326a.386.386 0 01-.386-.385z"
  }))));
}

SvgMartinique.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMartinique.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMartinique;
exports["default"] = _default;