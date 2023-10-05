import getActiveStepIndex from '../getActiveStepIndex';
describe('getActiveStepIndex function', function () {
  it('should return correct index', function () {
    var paramsList = [{
      hoveredIndex: -1,
      selectedIndex: -1
    }, {
      hoveredIndex: -1,
      selectedIndex: 10
    }, {
      hoveredIndex: 5,
      selectedIndex: -1
    }, {
      hoveredIndex: 5,
      selectedIndex: 10
    }];
    var results = [-1, 10, 5, 5];
    paramsList.forEach(function (params, index) {
      expect(getActiveStepIndex(params)).toBe(results[index]);
    });
  });
});