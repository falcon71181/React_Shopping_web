"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileListType = void 0;

var _utils = require("../../libs/utils");

var FileListType = _utils.isServer ? Object : window.FileList;
exports.FileListType = FileListType;