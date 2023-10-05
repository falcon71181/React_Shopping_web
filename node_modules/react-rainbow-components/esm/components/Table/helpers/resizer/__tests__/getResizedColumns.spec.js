import getResizedColumns from '../getResizedColumns';
describe('getResizedColumns', function () {
  it('should return the same columns passed', function () {
    var columns = [{
      label: 'Name',
      field: 'name'
    }, {
      label: 'Email',
      field: 'email'
    }];
    expect(getResizedColumns({
      columns: columns
    })).toEqual([{
      label: 'Name',
      field: 'name'
    }, {
      label: 'Email',
      field: 'email'
    }]);
  });
  it('should return the right columns', function () {
    var columns = [{
      label: 'Name',
      field: 'name',
      computedWidth: 50
    }, {
      label: 'Email',
      field: 'email',
      computedWidth: 50
    }];
    expect(getResizedColumns({
      columns: columns,
      colIndex: 1,
      widthDelta: 30
    })).toEqual([{
      label: 'Name',
      field: 'name',
      computedWidth: 50
    }, {
      label: 'Email',
      field: 'email',
      isResized: true,
      computedWidth: 80
    }]);
  });
});