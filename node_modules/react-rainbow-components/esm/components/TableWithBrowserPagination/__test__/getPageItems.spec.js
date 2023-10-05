import getPageItems from '../helpers/getPageItems';
var data = [{
  name: 'Leandro Torres'
}, {
  name: 'JL Torres'
}, {
  name: 'Reinier'
}, {
  sname: 'Sara'
}, {
  name: 'Tahimi L'
}, {
  name: 'Saray'
}, {
  name: 'J Leandro Torres'
}, {
  name: 'Tahimi'
}, {
  name: 'Sara P'
}, {
  sname: 'Leo Torres'
}];
describe('<getPageItems />', function () {
  it('should return the same data passed when pageSize is greater than data length', function () {
    var activePage = 3;
    var pageSize = 12;
    expect(getPageItems({
      data: data,
      activePage: activePage,
      pageSize: pageSize
    })).toEqual(data);
  });
  it('should return the right sliced data when pageSize is less than data length', function () {
    var activePages = [1, 2];
    var pageSize = 5;
    var expectedValues = [[{
      name: 'Leandro Torres'
    }, {
      name: 'JL Torres'
    }, {
      name: 'Reinier'
    }, {
      sname: 'Sara'
    }, {
      name: 'Tahimi L'
    }], [{
      name: 'Saray'
    }, {
      name: 'J Leandro Torres'
    }, {
      name: 'Tahimi'
    }, {
      name: 'Sara P'
    }, {
      sname: 'Leo Torres'
    }]];
    activePages.forEach(function (activePage, index) {
      expect(getPageItems({
        data: data,
        activePage: activePage,
        pageSize: pageSize
      })).toEqual(expectedValues[index]);
    });
  });
});