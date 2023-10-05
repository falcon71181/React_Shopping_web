"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("./icons");

var _types = require("./types");

function Icon(_ref) {
  var files = _ref.files,
      error = _ref.error,
      isDragOver = _ref.isDragOver,
      value = _ref.value,
      uploadIcon = _ref.uploadIcon;

  if (value !== null) {
    if (!isDragOver) {
      if (error) {
        return _react["default"].createElement(_icons.ErrorIcon, null);
      }

      if (files && files.length === 1) {
        return _react["default"].createElement(_icons.FileIcon, null);
      }

      if (files && files.length > 1) {
        return _react["default"].createElement(_icons.FilesIcon, null);
      }
    }
  }

  return uploadIcon || _react["default"].createElement(_icons.UploadIcon, null);
}

Icon.propTypes = {
  files: _propTypes["default"].instanceOf(_types.FileListType),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  isDragOver: _propTypes["default"].bool,
  value: _propTypes["default"].object,
  uploadIcon: _propTypes["default"].node
};
Icon.defaultProps = {
  files: undefined,
  error: undefined,
  isDragOver: false,
  value: undefined,
  uploadIcon: undefined
};