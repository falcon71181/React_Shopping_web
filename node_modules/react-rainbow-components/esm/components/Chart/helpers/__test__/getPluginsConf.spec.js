import getPluginsConf from '../getPluginsConf';
var firstPlugin = {
  id: 'datalabels',
  description: 'labels on bars'
};
var lastPlugin = {
  id: 'colorschemes',
  description: 'automatic color on bars'
};
var plugins = [firstPlugin, lastPlugin];
var data = {
  datalabels: {
    color: '#fc8d62'
  },
  colorschemes: {
    scheme: 'brewer.SetTwo7'
  },
  className: 'rainbow-m-horizontal_xx-large rainbow-m-top_x-large',
  children: [1, 2, 3]
};
describe('getPluginsConf', function () {
  it('should return the right value', function () {
    var expectedValue = {
      datalabels: {
        color: '#fc8d62'
      },
      colorschemes: {
        scheme: 'brewer.SetTwo7'
      }
    };
    expect(getPluginsConf(data, plugins)).toStrictEqual(expectedValue);
  });
});