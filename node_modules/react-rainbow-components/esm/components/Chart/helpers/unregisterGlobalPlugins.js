var exclude = ['filler', 'legend', 'title'];
export default function unregisterGlobalPlugins(ChartJS) {
  var plugins = ChartJS.plugins.getAll().filter(function (plugin) {
    return !exclude.includes(plugin.id);
  });
  ChartJS.plugins.unregister(plugins);
}