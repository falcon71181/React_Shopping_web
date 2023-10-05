import getDataToImport from '../getDataToImport';
import getImportParams from './getImportParams';
describe('getDataToImport', function () {
  it('should return right data', function () {
    var params = getImportParams();
    var dataToImport = getDataToImport(params);
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
    var params = getImportParams();
    var dataToImport = getDataToImport(params);
    expect(dataToImport.mergeByKey).toBe('');
  });
  it('should match matchField param with mergeByKey return value when matchField is set and is not "default"', function () {
    var params = getImportParams();
    params.matchField = 'email';
    var dataToImport = getDataToImport(params);
    expect(dataToImport.mergeByKey).toBe('email');
  });
});