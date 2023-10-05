"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getEventsOfDay;

var _helpers = require("../../../Calendar/helpers");

function getEventsOfDay(events, day) {
  var first = new Date(day);
  var last = (0, _helpers.addDays)(first, 1);
  return events.filter(function (event) {
    return event.startDate >= first && event.endDate <= last;
  });
}