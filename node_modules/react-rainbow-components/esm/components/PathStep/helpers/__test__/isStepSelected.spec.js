import isStepSelected from '../isStepSelected';
describe('getActiveStepIndex function', function () {
  it('should return false', function () {
    var paramsList = [{
      hoveredIndex: -1,
      selectedIndex: -1,
      index: 2
    }, {
      hoveredIndex: 5,
      selectedIndex: -1,
      index: 2
    }];
    paramsList.forEach(function (params) {
      expect(isStepSelected(params)).toBe(false);
    });
  });
  it('should return true', function () {
    expect(isStepSelected({
      hoveredIndex: -1,
      selectedIndex: 2,
      index: 2
    })).toBe(true);
  });
});