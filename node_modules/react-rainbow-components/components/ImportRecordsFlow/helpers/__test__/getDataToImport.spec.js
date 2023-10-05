"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getDataToImport = _interopRequireDefault(require("../getDataToImport"));

var _getImportParams = _interopRequireDefault(require("./getImportParams"));

describe('getDataToImport', function () {
  it('should return right data', function () {
    var params = (0, _getImportParams["default"])();
    var dataToImport = (0, _getDataToImport["default"])(params);
    var expectedData = {
      collection: 'users',
      mergeByKey: '',
      data: [{
        name: 'John Doe',
        email: 'jonh@gmail.com'
      }, {
        name: 'Jane Doe',
        email: 'jane@gmail.com'
      }, {
        name: 'Fred Flinstone',
        email: 'fred@gmail.com'
      }]
    };
    expect(dataToImport).toEqual(expect.objectContaining(expectedData));
  });
  it('should return mergeByKey empty when matchField param sent is default', function () {
    var params = (0, _getImportParams["default"])();
    var dataToImport = (0, _getDataToImport["default"])(params);
    expect(dataToImport.mergeByKey).toBe('');
  });
  it('should match matchField param with mergeByKey return value when matchField is set and is not "default"', function () {
    var params = (0, _getImportParams["default"])();
    params.matchField = 'email';
    var dataToImport = (0, _getDataToImport["default"])(params);
    expect(dataToImport.mergeByKey).toBe('email');
  });
});