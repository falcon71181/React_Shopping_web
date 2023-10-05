"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _preview = _interopRequireDefault(require("../preview"));

var _getFieldAssignedPreviewData = _interopRequireDefault(require("../../helpers/getFieldAssignedPreviewData"));

var _previewText = _interopRequireDefault(require("../styled/previewText"));

var _table = _interopRequireDefault(require("../../styled/table"));

jest.mock('../../helpers/getFieldAssignedPreviewData', function () {
  return jest.fn(function () {
    return [{
      name: 'John Doe'
    }, {
      name: 'Marie Doe'
    }];
  });
});
var props = {
  field: 'name',
  fileFields: ['First_Name', 'Last_Name'],
  data: [{
    First_Name: 'John',
    Last_Name: 'Doe'
  }, {
    First_Name: 'Marie',
    Last_Name: 'Doe'
  }],
  attributes: {
    name: {
      required: true
    }
  }
};
describe('<Preview />', function () {
  it('should call getFieldAssignedPreviewData with the right values', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      field: props.field,
      fileFields: props.fileFields,
      data: props.data,
      attributes: props.attributes
    }));
    expect(_getFieldAssignedPreviewData["default"]).toHaveBeenCalledWith([{
      First_Name: 'John',
      Last_Name: 'Doe'
    }, {
      First_Name: 'Marie',
      Last_Name: 'Doe'
    }], 'name', ['First_Name', 'Last_Name'], {
      name: {
        required: true
      }
    });
  });
  it('should return null when fileFields is an empty array', function () {
    var response = (0, _preview["default"])({
      field: props.field,
      fileFields: [],
      data: props.data,
      attributes: props.attributes
    });
    expect(response).toBe(null);
  });
  it('should render the right component when fileFields is not empty', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      field: props.field,
      fileFields: props.fileFields,
      data: props.data,
      attributes: props.attributes
    }));
    expect(component.find(_previewText["default"]).exists()).toBe(true);
  });
  it('should render the right text inside StyledPreviewText', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      field: props.field,
      fileFields: props.fileFields,
      data: props.data,
      attributes: props.attributes
    }));
    expect(component.find(_previewText["default"]).text()).toBe('Assigning “First_Name,Last_Name” fields to “name” database field');
  });
  it('should pass the right data to Table component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_preview["default"], {
      field: props.field,
      fileFields: props.fileFields,
      data: props.data,
      attributes: props.attributes
    }));
    expect(component.find(_table["default"]).prop('data')).toEqual([{
      name: 'John Doe'
    }, {
      name: 'Marie Doe'
    }]);
  });
});