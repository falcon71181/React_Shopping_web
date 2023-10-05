"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getAssignFieldsData = _interopRequireDefault(require("../getAssignFieldsData"));

describe('getAssignFieldsData', function () {
  it('should return empty assignFields when no attributes are passed', function () {
    var assignFields = (0, _getAssignFieldsData["default"])({
      fieldsMap: undefined,
      attributes: [],
      matchField: false
    });
    expect(assignFields.length).toBe(0);
  });
  it('should return 3 assignFields when 3 attributes are passed', function () {
    var assignFields = (0, _getAssignFieldsData["default"])({
      fieldsMap: {},
      attributes: {
        name: {
          required: true
        },
        street: {},
        age: {}
      },
      matchField: ''
    });
    var expectedAssignFields = [{
      required: true,
      databaseField: 'name'
    }, {
      required: false,
      databaseField: 'street'
    }, {
      required: false,
      databaseField: 'age'
    }];
    expect(assignFields).toEqual(expectedAssignFields);
  });
  it('should return required attribute as true when the required attribute param is set as true', function () {
    var assignFields = (0, _getAssignFieldsData["default"])({
      fieldsMap: {},
      attributes: {
        name: {
          required: true
        }
      },
      matchField: ''
    });
    expect(assignFields[0].required).toBe(true);
  });
  it('should return required attribute as false when the required attribute param is not set', function () {
    var assignFields = (0, _getAssignFieldsData["default"])({
      fieldsMap: {},
      attributes: {
        name: {}
      },
      matchField: ''
    });
    expect(assignFields[0].required).toBe(false);
  });
  it('should return required attribute as true when matchField value matches an attribute', function () {
    var assignFields = (0, _getAssignFieldsData["default"])({
      fieldsMap: {},
      attributes: {
        street: {}
      },
      matchField: 'street'
    });
    expect(assignFields[0].required).toBe(true);
  });
});