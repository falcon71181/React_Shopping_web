import getSelectedRowKeysFromSelectedRows from '../getSelectedRowKeysFromSelectedRows';
describe('getSelectedRowKeysFromSelectedRows', function () {
  it('should return an empty object when no argument is passed', function () {
    expect(getSelectedRowKeysFromSelectedRows()).toEqual({});
  });
  it('should return an empty object when selectedRows passed are not valid', function () {
    var selectedRows = ['wrongKey'];
    var indexes = {
      qwerty1234: true,
      asdfgh1234: true
    };
    expect(getSelectedRowKeysFromSelectedRows(selectedRows, indexes)).toEqual({});
  });
  it('should return the right selectedRowKeys', function () {
    var selectedRows = ['qwerty1234', 'wrongKey'];
    var indexes = {
      qwerty1234: {
        rowIndex: 0
      },
      asdfgh1234: {
        rowIndex: 1
      }
    };
    expect(getSelectedRowKeysFromSelectedRows(selectedRows, indexes)).toEqual({
      qwerty1234: true
    });
  });
});