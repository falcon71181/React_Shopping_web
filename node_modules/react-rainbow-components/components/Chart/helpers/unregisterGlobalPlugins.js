"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = unregisterGlobalPlugins;
var exclude = ['filler', 'legend', 'title'];

function unregisterGlobalPlugins(ChartJS) {
  var plugins = ChartJS.plugins.getAll().filter(function (plugin) {
    return !exclude.includes(plugin.id);
  });
  ChartJS.plugins.unregister(plugins);
}