"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getChildTimelineMarkersNodes;

function getChildTimelineMarkersNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('li[data-id="timeline-marker-li"]');
  }

  return [];
}