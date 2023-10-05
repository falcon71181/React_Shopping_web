"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = filterCollection;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getWords(query) {
  return query.split(/\s+/g).map(function (word) {
    return word.trim();
  }).filter(function (word) {
    return !!word;
  });
}

function filterCollection(params) {
  var query = params.query,
      data = params.data,
      _params$mapValuesToSt = params.mapValuesToStringFn,
      mapValuesToStringFn = _params$mapValuesToSt === void 0 ? function (item) {
    return typeof item.label === 'string' ? item.label : item.searchableText;
  } : _params$mapValuesToSt;

  if (query) {
    return data.filter(function (item) {
      var stringToMatch = mapValuesToStringFn(item);
      var words = getWords(query);
      return words.every(function (word) {
        var regex = new RegExp(escapeRegExp(word), 'i');
        return regex.test(stringToMatch);
      });
    });
  }

  return data;
}