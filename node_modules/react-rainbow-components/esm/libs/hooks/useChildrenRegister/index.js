import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useReducer } from 'react';
import { getChildNodes, insertChildOrderly } from './helpers';
import isChildRegistered from './helpers/isChildRegistered';

var useChildrenRegister = function useChildrenRegister(props) {
  var containerRef = props.containerRef,
      selector = props.selector;

  var _useReducer = useReducer(function (state, action) {
    var type = action.type,
        child = action.child,
        id = action.id;

    switch (type) {
      case 'register':
        {
          if (child && !isChildRegistered({
            children: state,
            id: child.id
          })) {
            var nodes = getChildNodes({
              ref: containerRef.current,
              selector: selector
            });
            return insertChildOrderly({
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
      _useReducer2 = _slicedToArray(_useReducer, 2),
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

export default useChildrenRegister;