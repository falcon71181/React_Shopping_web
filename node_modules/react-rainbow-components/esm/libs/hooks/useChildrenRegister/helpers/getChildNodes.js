import _toArray from "@babel/runtime/helpers/toArray";

var getChildNodes = function getChildNodes() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ref = _ref.ref,
      selector = _ref.selector;

  if (ref) {
    var _ref$querySelectorAll = ref.querySelectorAll(selector),
        _ref$querySelectorAll2 = _toArray(_ref$querySelectorAll),
        node = _ref$querySelectorAll2.slice(0);

    return node;
  }

  return [];
};

export default getChildNodes;