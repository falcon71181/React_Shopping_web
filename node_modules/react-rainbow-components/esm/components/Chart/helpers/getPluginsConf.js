export default function getPluginsConf(rest, plugins) {
  var pluginsConf = {};
  plugins.forEach(function (plugin) {
    var id = plugin.id;

    if (rest[id]) {
      pluginsConf[id] = rest[id];
    }
  });
  return pluginsConf;
}