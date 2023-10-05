import { useCallback, useRef } from 'react';
import { getChildNodes, insertChildOrderly, isChildRegistered } from './useChildrenRegister/helpers';

var useChildrenRegisterRef = function useChildrenRegisterRef(props) {
  var containerRef = props.containerRef,
      selector = props.selector;
  var childrenRegisteredRef = useRef([]);
  var register = useCallback(function (child) {
    if (child && !isChildRegistered({
      children: childrenRegisteredRef.current,
      id: child.id
    })) {
      var nodes = getChildNodes({
        ref: containerRef.current,
        selector: selector
      });
      childrenRegisteredRef.current = insertChildOrderly({
        children: childrenRegisteredRef.current,
        child: child,
        nodes: nodes
      });
    }
  }, [containerRef, selector]);
  var unregister = useCallback(function (id) {
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

export default useChildrenRegisterRef;