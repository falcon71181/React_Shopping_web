"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPluginsConf;

function getPluginsConf(rest, plugins) {
  var pluginsConf = {};
  plugins.forEach(function (plugin) {
    var id = plugin.id;

    if (rest[id]) {
      pluginsConf[id] = rest[id];
    }
  });
  return pluginsConf;
}