import getUpdatedRowsWhenDeselectAll from '../getUpdatedRowsWhenDeselectAll';
describe('getUpdatedRowsWhenDeselectAll', function () {
  it('should return an empty arra when rows is not passed', function () {
    expect(getUpdatedRowsWhenDeselectAll()).toEqual([]);
  });
  it('should return the right rows', function () {
    var rows = [{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: true
    }];
    expect(getUpdatedRowsWhenDeselectAll(rows)).toEqual([{
      key: 'row-1',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: false
    }]);
  });
});