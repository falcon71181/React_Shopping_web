"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLastVisibleNodeName;

function getLastVisibleNodeName(nodes) {
  if (nodes.length === 0) return undefined;
  return nodes[nodes.length - 1].name;
}