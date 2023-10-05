"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _uploadFileButton = _interopRequireDefault(require("../uploadFileButton"));

var _utils = require("../../../../libs/utils");

var _uploadFileLabel = _interopRequireDefault(require("../styled/uploadFileLabel"));

var _hiddenElement = _interopRequireDefault(require("../../../Structural/hiddenElement"));

jest.mock('../../../../libs/utils/uniqueId', function () {
  return jest.fn(function () {
    return 'uniqueId-value';
  });
});
describe('<UploadFileButton />', function () {
  it('should call uniqueId with the right value', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_uploadFileButton["default"], {
      onChange: function onChange() {}
    }));
    expect(_utils.uniqueId).toHaveBeenCalledWith('upload-file-input');
  });
  it('should associate the input and label with the same id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_uploadFileButton["default"], {
      onChange: function onChange() {}
    }));
    var uploadWrapper = component.find(_uploadFileLabel["default"]);
    var input = component.find(_hiddenElement["default"]);
    expect(uploadWrapper.prop('htmlFor')).toBe('uniqueId-value');
    expect(input.prop('id')).toBe('uniqueId-value');
  });
  it('should run change event when a file is added to the input', function () {
    var onChangeFn = jest.fn(function () {});
    var component = (0, _enzyme.mount)(_react["default"].createElement(_uploadFileButton["default"], {
      onChange: onChangeFn
    }));
    var input = component.find('input');
    input.simulate('change', {
      target: {
        files: ['dummy-value']
      }
    });
    expect(onChangeFn).toHaveBeenCalled();
  });
  it('should have the right props for the upload input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_uploadFileButton["default"], {
      onChange: function onChange() {}
    }));
    var input = component.find(_hiddenElement["default"]);
    expect(input.prop('type')).toBe('file');
    expect(input.prop('accept')).toBe('text/csv');
    expect(input.prop('multiple')).toBe(false);
  });
});