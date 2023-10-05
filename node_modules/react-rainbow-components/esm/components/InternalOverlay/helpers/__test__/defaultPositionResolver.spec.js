import defaultPositionResolver from '../defaultPositionResolver';
describe('defaultPositionResolver', function () {
  it('should return position at 0:0 when viewport is smaller than content', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 0,
          y: 0
        },
        leftBottomAnchor: {
          x: 0,
          y: 0
        },
        rightUpAnchor: {
          x: 0,
          y: 0
        },
        rightBottomAnchor: {
          x: 0,
          y: 0
        }
      },
      viewport: {
        width: 200,
        height: 200
      },
      content: {
        height: 220,
        width: 220
      }
    };
    expect(defaultPositionResolver(param)).toEqual({
      top: 0,
      left: 0
    });
  });
  it.skip('should return position at 0:0 when opts param is not valid', function () {
    [undefined, null, 12, {}, function () {}].forEach(function (value) {
      expect(defaultPositionResolver(value)).toEqual({
        top: 0,
        left: 0
      });
    });
  });
});