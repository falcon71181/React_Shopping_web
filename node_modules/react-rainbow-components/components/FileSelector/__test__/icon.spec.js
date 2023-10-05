"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _icons = require("@rainbow-modules/icons");

var _icon = _interopRequireDefault(require("../icon"));

var _icons2 = require("../icons");

describe('<Icon />', function () {
  it('should render a Picture when value is null', function () {
    var value = null;
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      isDragOver: isDragOver,
      value: value,
      uploadIcon: _react["default"].createElement(_icons.Picture, null)
    }));
    var icon = component.find(_icons.Picture);
    expect(icon.exists()).toBe(true);
  });
  it('should render a Picture', function () {
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      isDragOver: isDragOver,
      uploadIcon: _react["default"].createElement(_icons.Picture, null)
    }));
    var icon = component.find(_icons.Picture);
    expect(icon.exists()).toBe(true);
  });
  it('should render an UploadIcon when value is null', function () {
    var value = null;
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      isDragOver: isDragOver,
      value: value
    }));
    var icon = component.find(_icons2.UploadIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render an UploadIcon when isDragOver is true', function () {
    var isDragOver = true;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      isDragOver: isDragOver
    }));
    var icon = component.find(_icons2.UploadIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render an ErrorIcon', function () {
    var error = 'Error';
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      error: error,
      isDragOver: isDragOver
    }));
    var icon = component.find(_icons2.ErrorIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render a FileIcon', function () {
    var files = [{
      name: 'filename.jpg'
    }];
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      files: files,
      isDragOver: isDragOver
    }));
    var icon = component.find(_icons2.FileIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render a FilesIcon', function () {
    var files = [{
      name: 'filename1.jpg'
    }, {
      name: 'filename2.jpg'
    }];
    var isDragOver = false;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      files: files,
      isDragOver: isDragOver
    }));
    var icon = component.find(_icons2.FilesIcon);
    expect(icon.exists()).toBe(true);
  });
});