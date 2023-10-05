"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _getSchemaFieldOptions = _interopRequireDefault(require("../../helpers/getSchemaFieldOptions"));

var _ = _interopRequireDefault(require(".."));

jest.mock('../../helpers/getSchemaFieldOptions', function () {
  return jest.fn(function () {
    return [];
  });
});
describe('<StepOne />', function () {
  it('should render a Select when actionOption is set to "merge-records"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      actionOption: "merge-records"
    }));
    expect(component.find('Select').exists()).toBe(true);
  });
  it('should not render a Select when actionOption is set to other value than "merge-records"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      actionOption: "add-records"
    }));
    expect(component.find('Select').exists()).toBe(false);
  });
  it('should pass the matchField prop passed as value prop to Select', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      matchField: "test-field",
      actionOption: "merge-records"
    }));
    expect(component.find('Select').prop('value')).toBe('test-field');
  });
  it('should pass the right options to Select', function () {
    var expectedFieldOptions = [{
      label: 'Select the Field do you want match',
      value: 'default',
      disabled: true
    }, {
      label: 'Name',
      value: 'name'
    }, {
      label: 'Email',
      value: 'email'
    }];

    _getSchemaFieldOptions["default"].mockReturnValue(expectedFieldOptions);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      actionOption: "merge-records"
    }));
    expect(component.find('Select').prop('options')).toEqual(expectedFieldOptions);
  });
  it('should call getSchemaFieldOptions when change schemaFields', function () {
    _getSchemaFieldOptions["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      actionOption: "merge-records",
      schemaFields: []
    }));
    component.setProps({
      schemaFields: ['name', 'email', 'age']
    });
    expect(_getSchemaFieldOptions["default"].mock.calls[0][0]).toEqual([]);
    expect(_getSchemaFieldOptions["default"].mock.calls[1][0]).toEqual(['name', 'email', 'age']);
  });
});