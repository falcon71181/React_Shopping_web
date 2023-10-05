"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _helpers = require("./useChildrenRegister/helpers");

var useChildrenRegisterRef = function useChildrenRegisterRef(props) {
  var containerRef = props.containerRef,
      selector = props.selector;
  var childrenRegisteredRef = (0, _react.useRef)([]);
  var register = (0, _react.useCallback)(function (child) {
    if (child && !(0, _helpers.isChildRegistered)({
      children: childrenRegisteredRef.current,
      id: child.id
    })) {
      var nodes = (0, _helpers.getChildNodes)({
        ref: containerRef.current,
        selector: selector
      });
      childrenRegisteredRef.current = (0, _helpers.insertChildOrderly)({
        children: childrenRegisteredRef.current,
        child: child,
        nodes: nodes
      });
    }
  }, [containerRef, selector]);
  var unregister = (0, _react.useCallback)(function (id) {
    childrenRegisteredRef.current = childrenRegisteredRef.current.filter(function (value) {
      return value.id !== id;
    });
  }, []);
  return {
    childrenRegistered: childrenRegisteredRef.current,
    register: register,
    unregister: unregister
  };
};

var _default = useChildrenRegisterRef;
exports["default"] = _default;