"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _helpers = require("./helpers");

var _isChildRegistered = _interopRequireDefault(require("./helpers/isChildRegistered"));

var useChildrenRegister = function useChildrenRegister(props) {
  var containerRef = props.containerRef,
      selector = props.selector;

  var _useReducer = (0, _react.useReducer)(function (state, action) {
    var type = action.type,
        child = action.child,
        id = action.id;

    switch (type) {
      case 'register':
        {
          if (child && !(0, _isChildRegistered["default"])({
            children: state,
            id: child.id
          })) {
            var nodes = (0, _helpers.getChildNodes)({
              ref: containerRef.current,
              selector: selector
            });
            return (0, _helpers.insertChildOrderly)({
              children: state,
              child: child,
              nodes: nodes
            });
          }

          return state;
        }

      case 'unregister':
        return state.filter(function (value) {
          return value.id !== id;
        });

      default:
        return state;
    }
  }, []),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      childrenRegistered = _useReducer2[0],
      dispatch = _useReducer2[1];

  var register = function register(child) {
    dispatch({
      type: 'register',
      child: child
    });
  };

  var unregister = function unregister(id) {
    dispatch({
      type: 'unregister',
      id: id
    });
  };

  return {
    childrenRegistered: childrenRegistered,
    register: register,
    unregister: unregister
  };
};

var _default = useChildrenRegister;
exports["default"] = _default;