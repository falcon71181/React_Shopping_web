"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getFieldAssignedPreviewData = _interopRequireDefault(require("../getFieldAssignedPreviewData"));

var _getImportParams = _interopRequireDefault(require("./getImportParams"));

describe('getFieldAssignedPreviewData', function () {
  it('should return right data', function () {
    var params = (0, _getImportParams["default"])();
    var field = 'name';
    var fileFields = ['First_Name', 'Last_Name'];
    var assignedPreviewData = (0, _getFieldAssignedPreviewData["default"])(params.data, field, fileFields, params.schema.attributes);
    var expectedPreviewData = [{
      name: 'John Doe'
    }, {
      name: 'Jane Doe'
    }, {
      name: 'Fred Flinstone'
    }];
    expect(assignedPreviewData).toEqual(expectedPreviewData);
  });
});