import positionResolver from '../positionResolver';
var DEFAULT_MARGIN = 5;
describe('positionResolver', function () {
  it('should return the correct position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 209,
          y: 175
        },
        leftBottomAnchor: {
          x: 209,
          y: 215
        },
        rightUpAnchor: {
          x: 249,
          y: 175
        },
        rightBottomAnchor: {
          x: 249,
          y: 215
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
      top: param.trigger.leftBottomAnchor.y + DEFAULT_MARGIN,
      left: param.trigger.rightBottomAnchor.x - param.content.width
    };
    expect(positionResolver(param)).toEqual(expected);
  });
});