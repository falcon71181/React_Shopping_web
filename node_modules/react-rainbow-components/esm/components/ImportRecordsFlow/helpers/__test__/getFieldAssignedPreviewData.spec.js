import getFieldAssignedPreviewData from '../getFieldAssignedPreviewData';
import getImportParams from './getImportParams';
describe('getFieldAssignedPreviewData', function () {
  it('should return right data', function () {
    var params = getImportParams();
    var field = 'name';
    var fileFields = ['First_Name', 'Last_Name'];
    var assignedPreviewData = getFieldAssignedPreviewData(params.data, field, fileFields, params.schema.attributes);
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