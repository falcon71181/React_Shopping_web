"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _preview = _interopRequireDefault(require("../preview"));

var _fileCardTitle = _interopRequireDefault(require("../styled/fileCardTitle"));

var _fileCardDescription = _interopRequireDefault(require("../styled/fileCardDescription"));

var _buttonIcon = _interopRequireDefault(require("../styled/buttonIcon"));

describe('<Preview />', function () {
  it('should show default labels', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], null));
    var title = component.find(_fileCardTitle["default"]);
    var type = component.find(_fileCardDescription["default"]);
    expect(title.text()).toBe('Unknow File Name');
    expect(type.text()).toBe('Unknow File Type');
  });
  it('should set the right labels according to params', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      fileName: "preview-title",
      fileType: "text/csv"
    }));
    var title = component.find(_fileCardTitle["default"]);
    var type = component.find(_fileCardDescription["default"]);
    expect(title.text()).toBe('preview-title');
    expect(type.text()).toBe('text/csv');
  });
  it('should run remove handler function after click the remove button', function () {
    var onRemoveFileFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      onRemoveFile: onRemoveFileFn
    }));
    component.find(_buttonIcon["default"]).simulate('click');
    expect(onRemoveFileFn).toHaveBeenCalled();
  });
  it('should have data passed properly to preview table', function () {
    var props = {
      data: [{
        First_Name: 'John',
        Last_Name: 'Doe'
      }, {
        First_Name: 'Marie',
        Last_Name: 'Sun'
      }, {
        First_Name: 'Jane',
        Last_Name: 'Doe'
      }],
      columns: ['First_Name', 'Last_Name'],
      isLoading: true
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], props));
    expect(component.find('PreviewTable').props()).toEqual(props);
  });
});