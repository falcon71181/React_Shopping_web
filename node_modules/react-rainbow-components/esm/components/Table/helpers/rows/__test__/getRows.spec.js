import getRows from '../getRows';
jest.mock('../getRowSelectionInputType', function () {
  return jest.fn(function () {
    return 'checkbox';
  });
});
jest.mock('../computeUniqueRowKey', function () {
  return jest.fn(function () {
    return 'row-1';
  });
});
jest.mock('../../selector/isSelectedRow', function () {
  return jest.fn(function () {
    return true;
  });
});
jest.mock('../../selector/isDisabledRow', function () {
  return jest.fn(function () {
    return false;
  });
});
describe('getRows', function () {
  it('should return an empty array when any params are passed', function () {
    expect(getRows()).toEqual([]);
  });
  it('should return the right rows', function () {
    var data = [{
      name: 'John'
    }, {
      name: 'Pepe'
    }];
    expect(getRows({
      rows: data,
      maxRowSelection: 5,
      keyField: 'id',
      selectedRowsKeys: {}
    })).toEqual([{
      key: 'row-1',
      inputType: 'checkbox',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-1',
      inputType: 'checkbox',
      isSelected: true,
      isDisabled: false
    }]);
  });
});