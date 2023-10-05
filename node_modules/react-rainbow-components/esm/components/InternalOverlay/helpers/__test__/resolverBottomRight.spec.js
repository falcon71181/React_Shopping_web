import resolverBottomRight from '../resolverBottomRight';
describe('resolverBottomRight', function () {
  it('should return the correct bottomRight position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 939,
          y: 375
        },
        leftBottomAnchor: {
          x: 939,
          y: 415
        },
        rightUpAnchor: {
          x: 979,
          y: 375
        },
        rightBottomAnchor: {
          x: 979,
          y: 415
        }
      },
      viewport: {
        width: 1100,
        height: 761
      },
      content: {
        height: 220,
        width: 220
      }
    };
    var expected = {
      top: param.trigger.leftBottomAnchor.y,
      left: param.trigger.rightBottomAnchor.x - param.content.width
    };
    expect(resolverBottomRight(param)).toEqual(expected);
  });
});